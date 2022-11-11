import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_BOARD_IMAGE,
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_CREW_BOARDS_LATEST);
  const { data: deadLine } = useQuery(FETCH_CREW_BOARDS_DEADLINE);
  // const { data: crewImg } = useQuery(FETCH_BOARD_IMAGE, {
  //   variables: { crewBoardId: router.query.crewId },
  // });
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
      // crewImg={crewImg}
    />
  );
};

export default CrewList;
