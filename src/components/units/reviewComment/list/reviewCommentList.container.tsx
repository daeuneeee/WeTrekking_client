import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../../crews/detail/crewDetail.queries";
import ReviewCommentListUi from "./reviewCommentList.presenter";
import {
  DELETE_REVIEW_COMMENT,
  UPDATE_REVIEW_COMMENT,
} from "./reviewCommentList.queries";
import {
  IMyVariables,
  IReviewCommentListProps,
} from "./reviewCommentList.types";

const ReviewCommentList = ({ reviewCommentsMap }: IReviewCommentListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editComments, setEditComments] = useState("");

  const [deleteReviewComment] = useMutation<
    Pick<IMutation, "deleteReviewComment">
  >(DELETE_REVIEW_COMMENT);

  const [updateReviewComment] = useMutation<
    Pick<IMutation, "updateReviewComment">
  >(UPDATE_REVIEW_COMMENT);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const userId = data?.fetchUser.id;
  const reviewCommentUserId = reviewCommentsMap?.user.id;

  const onChangeEditComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
    const myVariables: IMyVariables = {
      updateReviewCommentInput: {},
    };
    if (editComments) {
      myVariables.updateReviewCommentInput.comment = editComments;
    }
    if (commentId) {
      myVariables.updateReviewCommentInput.reviewCommentId = commentId;
    }
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
      reviewCommentUserId={reviewCommentUserId}
      userId={userId}
    />
  );
};

export default ReviewCommentList;
