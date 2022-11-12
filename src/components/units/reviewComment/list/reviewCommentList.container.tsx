import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, MouseEvent, useState } from "react";
import ReviewCommentListUi from "./reviewCommentList.presenter";
import {
  DELETE_REVIEW_COMMENT,
  UPDATE_REVIEW_COMMENT,
} from "./reviewCommentList.queries";

const ReviewCommentList = ({ reviewCommentsMap }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editComments, setEditComments] = useState("");

  const [deleteReviewComment] = useMutation(DELETE_REVIEW_COMMENT);

  const [updateReviewComment] = useMutation(UPDATE_REVIEW_COMMENT);

  const onChangeEditComment = (event: ChangeEvent<HTMLInputElement>) => {
    setEditComments(event.target.value);
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    await deleteReviewComment({
      variables: { reviewCommentId: commentId },
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
      reviewCommentId: commentId,
      updateComment: editComments,
    };
    await updateReviewComment({
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
    <ReviewCommentListUi
      reviewCommentsMap={reviewCommentsMap}
      onClickShowModal={onClickShowModal}
      onClickCancelModal={onClickCancelModal}
      onClickModalConfirm={onClickModalConfirm}
      isModalOpen={isModalOpen}
      onClickEditBtn={onClickEditBtn}
      isEditOpen={isEditOpen}
      onClickEdit={onClickEdit}
      onChangeEditComment={onChangeEditComment}
      editComments={editComments}
    />
  );
};

export default ReviewCommentList;
