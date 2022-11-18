import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";
import { errorModal } from "../../../commons/modals/alertModals";
import { CREATE_DIB, FETCH_CREW_BOARD } from "../detail/crewDetail.queries";
import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const [sort, setSort] = useState(true);
  // const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(9);

  const [accessToken] = useRecoilState(accessTokenState);

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchCrewBoardsLatestFirst">
  >(FETCH_CREW_BOARDS_LATEST);

  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);

  const items = data?.fetchCrewBoardsLatestFirst.flat().slice(0, visible);

  // useEffect(() => {
  //   console.log(data?.fetchCrewBoardsLatestFirst);
  // }, []);

  const onClickPick = (event: any) => {
    void createDib({
      variables: { crewBoardId: event.currentTarget.id },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_CREW_BOARDS_LATEST,
      //   },
      //   { query: FETCH_CREW_BOARDS_DEADLINE },
      //   {
      //     query: FETCH_CREW_BOARD,
      //     variables: { crewBoardId: String(router.query.crewId) },
      //   },
      // ],
    });
  };

  const onClickToWrite = () => {
    if (!accessToken) {
      errorModal("로그인이 필요합니다.");
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
    // if (data === undefined) return;
    // await fetchMore({
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (fetchMoreResult.fetchCrewBoardsLatestFirst === undefined) {
    //       return {
    //         fetchCrewBoardsLatestFirst: [...prev.fetchCrewBoardsLatestFirst],
    //       };
    //     }
    //     return {
    //       fetchCrewBoardsLatestFirst: [
    //         ...prev.fetchCrewBoardsLatestFirst,
    //         ...fetchMoreResult.fetchCrewBoardsLatestFirst,
    //       ],
    //     };
    //   },
    // });
    setVisible((prev) => prev + 9);
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
      onClickFetchMore={onClickFetchMore}
      visible={visible}
      items={items}
    />
  );
};

export default CrewList;
