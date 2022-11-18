import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IChatUiProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSendBtn: () => void;
  data: any;
  chatInput: any;
  crewDetail?: Pick<IQuery, "fetchCrewBoard">;
  crewUsers: any;
}
