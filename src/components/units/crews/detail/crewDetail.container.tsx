import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardImageArgs,
  IQueryFetchCrewBoardArgs,
  IQueryFetchCrewCommentsArgs,
} from "../../../../commons/types/generated/types";
import CrewDetailUi from "./crewDetail.presenter";
import {
  CREATE_CREW_USER_LIST,
  CREATE_DIB,
  DELETE_CREW_BOARD,
  FETCH_BOARD_IMAGE,
  FETCH_CREW_BOARD,
  FETCH_CREW_COMMENTS,
  FETCH_DIBS,
  FETCH_USER,
} from "./crewDetail.queries";

const CrewDetail = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setCrewId] = useState("");

  const [createDib] = useMutation<Pick<IMutation, "createDib">>(CREATE_DIB);
  const [createCrewUserList] = useMutation<
    Pick<IMutation, "createCrewUserList">
  >(CREATE_CREW_USER_LIST);

  const [deleteCrewBoard] =
    useMutation<Pick<IMutation, "deleteCrewBoard">>(DELETE_CREW_BOARD);

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

  const isDib = dib?.fetchDibs
    .map((el) => el.crewBoard.id)
    .filter((el) => el.includes(String(data?.fetchCrewBoard.id))).length;

  const userId = userInform?.fetchUser.id;
  const boardId = data?.fetchCrewBoard.user.id;

  const onClickEdit = () => {
    void router.push(`/crews/${String(router.query.crewId)}/edit`);
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
      });
      alert("참가신청이 완료되었습니다!");
    } catch (error) {}
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
      alert("정상적으로 삭제되었습니다.");
      void router.push(`/crews`);
      setIsModalOpen(false);
    } catch (error) {}
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
      onClickApply={onClickApply}
    />
  );
};

export default CrewDetail;
