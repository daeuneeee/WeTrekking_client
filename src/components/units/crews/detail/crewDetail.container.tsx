import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationFinishCrewArgs,
  IQuery,
  IQueryFetchAcceptedListArgs,
  IQueryFetchBoardImageArgs,
  IQueryFetchCrewBoardArgs,
  IQueryFetchCrewCommentsArgs,
} from "../../../../commons/types/generated/types";
import { isRouteModalOpenState } from "../../../../store";
import { errorModal, successModal } from "../../../commons/modals/alertModals";
import {
  FETCH_CREW_BOARDS_DEADLINE,
  FETCH_CREW_BOARDS_LATEST,
} from "../list/crewList.queries";
import CrewDetailUi from "./crewDetail.presenter";
import {
  CREATE_DIB,
  DELETE_CREW_BOARD,
  FETCH_BOARD_IMAGE,
  FETCH_CREW_BOARD,
  FETCH_CREW_COMMENTS,
  FETCH_DIBS,
  FETCH_USER,
  CREATE_CREW_USER_LIST,
  FETCH_ACCEPTED_LIST,
  CREW_ATTENDED,
} from "./crewDetail.queries";

const CrewDetail = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setCrewId] = useState("");

  const [isRouteModalOpen, setIsRouteModalOpen] = useRecoilState(
    isRouteModalOpenState
  );

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);
  const [createCrewUserList] = useMutation<
    Pick<IMutation, "createCrewUserList">
  >(CREATE_CREW_USER_LIST);

  const [deleteCrewBoard] =
    useMutation<Pick<IMutation, "deleteCrewBoard">>(DELETE_CREW_BOARD);

  const [attendedCrew] = useMutation<
    Pick<IMutation, "finishCrew">,
    IMutationFinishCrewArgs
  >(CREW_ATTENDED);

  const { data: dib } = useQuery<Pick<IQuery, "fetchDibs">>(FETCH_DIBS);

  const { data: comments, fetchMore } = useQuery<
    Pick<IQuery, "fetchCrewComments">,
    IQueryFetchCrewCommentsArgs
  >(FETCH_CREW_COMMENTS, {
    variables: { boardId: String(router.query.crewId) },
  });

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewBoard">,
    IQueryFetchCrewBoardArgs
  >(FETCH_CREW_BOARD, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  const { data: crewImg } = useQuery<
    Pick<IQuery, "fetchBoardImage">,
    IQueryFetchBoardImageArgs
  >(FETCH_BOARD_IMAGE, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  const { data: userInform } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const { data: acceptedList } = useQuery<
    Pick<IQuery, "fetchAcceptedList">,
    IQueryFetchAcceptedListArgs
  >(FETCH_ACCEPTED_LIST, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  console.log(acceptedList);

  const isDib = dib?.fetchDibs
    .map((el) => el.crewBoard.id)
    .filter((el) => el.includes(String(data?.fetchCrewBoard.id))).length;

  const userId = userInform?.fetchUser.id;
  const boardId = data?.fetchCrewBoard.user.id;

  const onClickRoute = () => {
    setIsRouteModalOpen(true);
  };

  const onClickEdit = () => {
    void router.push(`/crews/${String(router.query.crewId)}/edit`);
  };

  const onClickToChat = () => {
    void router.push(`/crews/${String(router.query.crewId)}/chat`);
  };

  const onLoadMore = async () => {
    if (!comments) return;
    await fetchMore({
      variables: {
        page: Math.ceil(comments.fetchCrewComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchCrewComments === undefined) {
          return {
            fetchCrewComments: [...prev.fetchCrewComments],
          };
        }
        return {
          fetchCrewComments: [
            ...prev.fetchCrewComments,
            ...fetchMoreResult.fetchCrewComments,
          ],
        };
      },
    });
  };

  const onClickList = () => {
    void router.push(`/crews`);
  };

  const onClickLogin = () => {
    void router.push(`/login`);
  };

  const onClickApply = async () => {
    try {
      await createCrewUserList({
        variables: { crewBoardId: router.query.crewId },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("참가신청이 완료되었습니다!");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickPick = () => {
    void createDib({
      variables: { crewBoardId: router.query.crewId },
      refetchQueries: [
        {
          query: FETCH_CREW_BOARD,
          variables: { crewBoardId: String(router.query.crewId) },
        },
        { query: FETCH_DIBS },
        {
          query: FETCH_CREW_BOARDS_LATEST,
        },
        { query: FETCH_CREW_BOARDS_DEADLINE },
      ],
    });
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCrewId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    try {
      await deleteCrewBoard({
        variables: { crewBoardId: router.query.crewId },
        update(cache) {
          cache.modify({ fields: { fetchCrewBoardsLatestFirst: () => {} } });
        },
      });
      successModal("정상적으로 삭제되었습니다.");
      void router.push(`/crews`);
      setIsModalOpen(false);
    } catch (error) {}
  };

  const onClickAttended = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await attendedCrew({
        variables: { id: event?.currentTarget.id },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("출석되었습니다.");
    } catch (error) {
      errorModal("이미 출석 처리 되었습니다.");
    }
  };

  return (
    <CrewDetailUi
      data={data}
      comments={comments}
      onLoadMore={onLoadMore}
      crewImg={crewImg}
      onClickEdit={onClickEdit}
      userId={userId}
      boardId={boardId}
      onClickList={onClickList}
      onClickShowModal={onClickShowModal}
      onClickCancelModal={onClickCancelModal}
      onClickModalConfirm={onClickModalConfirm}
      isModalOpen={isModalOpen}
      onClickLogin={onClickLogin}
      onClickPick={onClickPick}
      isDib={isDib}
      onClickToChat={onClickToChat}
      onClickApply={onClickApply}
      acceptedList={acceptedList}
      onClickRoute={onClickRoute}
      isRouteModalOpen={isRouteModalOpen}
      onClickAttended={onClickAttended}
    />
  );
};

export default CrewDetail;
