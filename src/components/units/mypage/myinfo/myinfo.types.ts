import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyInfoUiProps {
  userDatas: Pick<IQuery, "fetchUser">;
  onClickPointModal: () => void;
  onClickToReviewWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchVisitList">;
}
