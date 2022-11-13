import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();

  const [accessToken] = useRecoilState(accessTokenState);

  const { data } = useQuery<Pick<IQuery, "fetchCrewBoardsLatestFirst">>(
    FETCH_CREW_BOARDS_LATEST
  );
  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);
  const [sort, setSort] = useState(true);

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
    />
  );
};

export default CrewList;
