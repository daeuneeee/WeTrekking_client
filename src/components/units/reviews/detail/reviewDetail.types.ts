import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IReviewDetailUiProps {
  data?: Pick<IQuery, "fetchReviewBoard">;
  onClickX: () => void;
  onLoadMore: any;
  reviewComments?: Pick<IQuery, "fetchReviewComments">;
  onClickShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickModalConfirm: () => void;
  onClickCancelModal: () => void;
  isModalOpen: boolean;
  userId?: string;
  reviewImg?: Pick<IQuery, "fetchReviewBoardImage">;
}
