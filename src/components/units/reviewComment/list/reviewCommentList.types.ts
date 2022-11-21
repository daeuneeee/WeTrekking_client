import { ChangeEvent, MouseEvent } from "react";

export interface IReviewCommentListProps {
  reviewCommentsMap: any;
}

export interface IReviewCommentListUiProps {
  reviewCommentsMap: any;
  onClickShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancelModal: () => void;
  onClickModalConfirm: () => void;
  isModalOpen: boolean;
  onClickEditBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  isEditOpen: boolean;
  onChangeEditComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEdit: () => void;
  editComments: string;
  reviewCommentUserId: string;
  userId?: string;
}

export interface IMyVariables {
  updateReviewCommentInput: {
    comment?: string;
    reviewCommentId?: string;
  };
}
