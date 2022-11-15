import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUploadListUiProps {
  data?: Pick<IQuery, "fetchHostCrewList">;
  isModalActive: boolean;
  onClickModalToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickListDel: () => void;
  onClickModalCancel: () => void;
}
