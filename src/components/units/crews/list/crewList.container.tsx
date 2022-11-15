import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";
import {
  CREATE_DIB,
  FETCH_CREW_BOARD,
  FETCH_DIBS,
} from "../detail/crewDetail.queries";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const [sort, setSort] = useState(true);

  const [accessToken] = useRecoilState(accessTokenState);

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);

  const { data: dib } = useQuery<Pick<IQuery, "fetchDibs">>(FETCH_DIBS);

  const { data } = useQuery<Pick<IQuery, "fetchCrewBoardsLatestFirst">>(
    FETCH_CREW_BOARDS_LATEST
  );

  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);

  // const latestId = data?.fetchCrewBoardsLatestFirst[0].map((el) => el.id);

  const isDib = dib?.fetchDibs.map((el) => el.crewBoard.id).filter((el) => el);

  const dataList = data?.fetchCrewBoardsLatestFirst.map((el) => {
    return isDib?.map((dibId) => {
      console.log(el);
      console.log(dibId);
      return el.filter((el) => el.id === dibId);
    });
  });

  console.log(dataList);

  const onClickPick = () => {
    void createDib({
      variables: { crewBoardId: "991efa19-6222-4ead-b54c-147a243cea29" },
      refetchQueries: [
        {
          query: FETCH_CREW_BOARD,
          variables: { crewBoardId: String(router.query.crewId) },
        },
        { query: FETCH_DIBS },
      ],
    });
  };

  const onClickToWrite = () => {
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      void router.push("/login");
    } else {
      void router.push("/crews/write");
    }
  };

  const onClickLatest = () => {
    setSort(true);
  };

  const onClickDeadLine = () => {
    setSort(false);
  };

  return (
    <CrewListUi
      data={data}
      onClickToWrite={onClickToWrite}
      sort={sort}
      deadLine={deadLine}
      onClickLatest={onClickLatest}
      onClickDeadLine={onClickDeadLine}
      onClickPick={onClickPick}
      isDib={isDib}
    />
  );
};

export default CrewList;
