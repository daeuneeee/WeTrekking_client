import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyInfoUiProps {
  userDatas: Pick<IQuery, "fetchUser">;
  onClickPointModal: () => void;
}
