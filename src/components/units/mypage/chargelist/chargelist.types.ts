import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IChargeListUiProps {
  data?: Pick<IQuery, "fetchPointPayments">;
  pageNum: number;
  onChangePage: (page: number) => void;
  isActive: boolean;
  onClickModalOn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickModalOff: () => void;
  onClickcancelPoint: () => void;
}
