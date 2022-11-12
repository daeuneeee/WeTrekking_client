import { ChangeEvent, MouseEvent } from "react";

export interface ICrewSubCommentListUiProps {
  subCommentsMap: any;
  onClickShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancelModal: () => void;
  onClickModalConfirm: () => void;
  isModalOpen: boolean;
  isEditOpen: boolean;
  onChangeEditComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEdit: () => void;
  onClickEditBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  editComments: string;
}

export interface ICrewSubCommentListProps {
  subCommentsMap: any;
}
