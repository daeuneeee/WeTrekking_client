import { IQuery } from "../../../../commons/types/generated/types";

export interface IPickedListUiProps {
  pickedData?: any;
  onClickMore: () => void;
  visible: number;
  data?: Pick<IQuery, "fetchDibs">;
}
