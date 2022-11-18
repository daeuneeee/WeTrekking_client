import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IApplyListUiProps {
  data?: Pick<IQuery, "fetchCrewUserList">;
  crewCancelBtn: () => void;
  onClickModalOn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickModalOff: () => void;
  isActive: boolean;
}
