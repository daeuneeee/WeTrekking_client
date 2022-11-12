import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IQuery,
  IQueryFetchCrewSubCommentsArgs,
} from "../../../../commons/types/generated/types";
import { isOpenSubCommentState } from "../../../../store";
import CrewCommentListUi from "./crewCommentList.presenter";
import {
  DELETE_CREW_COMMENT,
  FETCH_CREW_SUB_COMMENTS,
  UPDATE_CREW_COMMENT,
} from "./crewCommentList.queries";
import { ICrewCommentListProps } from "./crewCommentList.types";

const CrewCommentList = ({ commentsMap }: ICrewCommentListProps) => {
  const router = useRouter();

  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editComments, setEditComments] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpenSubComment, setIsOpenSubComment] = useRecoilState(
    isOpenSubCommentState
  );

  const [updateCrewComment] =
    useMutation<Pick<IMutation, "updateCrewComment">>(UPDATE_CREW_COMMENT);

  const onChangeEditComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditComments(event.target.value);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewSubComments">,
    IQueryFetchCrewSubCommentsArgs
  >(FETCH_CREW_SUB_COMMENTS, {
    variables: {
      commentId: commentsMap.id,
    },
  });

  const [deleteCrewComment] =
    useMutation<Pick<IMutation, "deleteCrewComment">>(DELETE_CREW_COMMENT);

  const onClickComment = (event: MouseEvent<HTMLSpanElement>) => {
    setCommentId(event.currentTarget.id);
    setIsOpenSubComment((prev) => !prev);
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    await deleteCrewComment({
      variables: { commentId },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsModalOpen(false);
  };

  const onClickEditBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setCommentId(event.currentTarget.id);
    setIsEditOpen((prev) => !prev);
  };

  const onClickEdit = async () => {
    const myVariables = {
      commentId,
      updateCrewCommentInput: {},
    };
    if (editComments) {
      myVariables.updateCrewCommentInput.comment = editComments;
    }
    if (router.query.crewId) {
      myVariables.updateCrewCommentInput.boardId = router.query.crewId;
    }
    await updateCrewComment({
      variables: myVariables,
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsEditOpen(false);
    setEditComments("");
  };

  return (
    <CrewCommentListUi
      commentsMap={commentsMap}
      data={data}
      onClickComment={onClickComment}
      isOpenSubComment={isOpenSubComment}
      onClickShowModal={onClickShowModal}
      onClickCancelModal={onClickCancelModal}
      onClickModalConfirm={onClickModalConfirm}
      isModalOpen={isModalOpen}
      commentId={commentId}
      onClickEditBtn={onClickEditBtn}
      isEditOpen={isEditOpen}
      onClickEdit={onClickEdit}
      onChangeEditComment={onChangeEditComment}
      editComments={editComments}
    />
  );
};

export default CrewCommentList;
