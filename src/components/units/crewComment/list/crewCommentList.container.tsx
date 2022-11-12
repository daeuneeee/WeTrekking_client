import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchCrewSubCommentsArgs,
} from "../../../../commons/types/generated/types";
import { isOpenSubCommentState } from "../../../../store";
import CrewCommentListUi from "./crewCommentList.presenter";
import { UPDATE_CREW_COMMENT } from "./crewCommentList.queries";
import {
  DELETE_CREW_COMMENT,
  FETCH_CREW_SUB_COMMENTS,
} from "./crewCommentList.queries";

const CrewCommentList = ({ commentsMap }) => {
  const router = useRouter();

  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editComments, setEditComments] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpenSubComment, setIsOpenSubComment] = useRecoilState(
    isOpenSubCommentState
  );

  const [updateCrewComment] = useMutation(UPDATE_CREW_COMMENT);

  const onChangeEditComment = (event: ChangeEvent<HTMLInputElement>) => {
    setEditComments(event.target.value);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewSubComments">,
    IQueryFetchCrewSubCommentsArgs
  >(FETCH_CREW_SUB_COMMENTS, {
    variables: {
      commentId: commentsMap.id,
      boardId: String(router.query.crewId),
    },
  });

  const [deleteCrewComment] = useMutation(DELETE_CREW_COMMENT);

  const onClickComment = (event) => {
    setCommentId(event.currentTarget.id);
    setIsOpenSubComment((prev) => !prev);
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };
  console.log(commentId);

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
