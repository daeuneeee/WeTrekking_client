import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewCommentListProps {
  commentsMap: any;
}

export interface ICrewCommentListUiProps {
  commentsMap: any;
  data?: Pick<IQuery, "fetchCrewSubComments">;
  onClickComment: (event: MouseEvent<HTMLSpanElement>) => void;
  isOpenSubComment: boolean;
  onClickShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
  isModalOpen: boolean;
  onClickModalConfirm: () => void;
  onClickCancelModal: () => void;
  commentId: string;
  onClickEditBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  isEditOpen: boolean;
  onClickEdit: () => void;
  onChangeEditComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  editComments: string;
  commentUserId: string;
  userId?: string;
}
