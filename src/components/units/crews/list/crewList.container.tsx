import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchCrewBoardsLatestFirst">>(
    FETCH_CREW_BOARDS_LATEST
  );
  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);
  const [sort, setSort] = useState(true);

  const onClickToWrite = () => {
    void router.push("/crews/write");
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
