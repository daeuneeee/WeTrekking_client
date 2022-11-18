import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";

import { errorModal } from "../../../commons/modals/alertModals";
import { CREATE_DIB } from "../detail/crewDetail.queries";

import CrewListUi from "./crewList.presenter";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
  FETCH_USER,
} from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const [sort, setSort] = useState(true);
  const [visible, setVisible] = useState(9);
  const [loginId, setLoginId] = useState("");

  const [accessToken] = useRecoilState(accessTokenState);

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);

  const { data } = useQuery<Pick<IQuery, "fetchCrewBoardsLatestFirst">>(
    FETCH_CREW_BOARDS_LATEST
  );

  const { data: deadLine } = useQuery<
    Pick<IQuery, "fetchCrewBoardsDeadlineFirst">
  >(FETCH_CREW_BOARDS_DEADLINE);

  const { data: loggedUser } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  useEffect(() => {
    setLoginId(String(loggedUser?.fetchUser.id));
  }, [loggedUser]);

  const itemsLatest = data?.fetchCrewBoardsLatestFirst.flat().slice(0, visible);
  const itemsDeadLine = deadLine?.fetchCrewBoardsDeadlineFirst
    .flat()
    .slice(0, visible);

  const onClickPick = (event: MouseEvent<HTMLDivElement>) => {
    try {
      void createDib({
        variables: { crewBoardId: event.currentTarget.id },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
    } catch (error) {
      errorModal("로그인이 필요합니다.");
      void router.push("/login");
    }
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
      loginId={loginId}
    />
  );
};

export default CrewList;
