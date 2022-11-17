import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";
import { CREATE_DIB } from "../detail/crewDetail.queries";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const [sort, setSort] = useState(true);
  const [visible, setVisible] = useState(9);

  const [accessToken] = useRecoilState(accessTokenState);

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);

  const { data } = useQuery<Pick<IQuery, "fetchCrewBoardsLatestFirst">>(
    FETCH_CREW_BOARDS_LATEST
  );

  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);

  const itemsLatest = data?.fetchCrewBoardsLatestFirst.flat().slice(0, visible);
  const itemsDeadLine = deadLine?.fetchCrewBoardsDeadlineFirst
    .flat()
    .slice(0, visible);

  const onClickPick = (event: MouseEvent<HTMLDivElement>) => {
    void createDib({
      variables: { crewBoardId: event.currentTarget.id },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
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

  const onClickFetchMore = async () => {
    setVisible((prev) => prev + 9);
  };

  return (
    <CrewListUi
      onClickToWrite={onClickToWrite}
      sort={sort}
      onClickLatest={onClickLatest}
      onClickDeadLine={onClickDeadLine}
      onClickPick={onClickPick}
      onClickFetchMore={onClickFetchMore}
      itemsLatest={itemsLatest}
      itemsDeadLine={itemsDeadLine}
    />
  );
};

export default CrewList;
