import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IReviewListUiProps {
  data?: Pick<IQuery, "fetchReviewBoards">;
  onClickList: (event: MouseEvent<HTMLAnchorElement>) => void;
  reviewId: string;
  isOpenSideBar: boolean;
  number: number;
  onChangePage: (page: number) => void;
}
