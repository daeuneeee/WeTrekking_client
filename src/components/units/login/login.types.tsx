import { ChangeEvent } from "react";

export interface ILoginUiProps {
  onChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
  isCheck: boolean;
  onClickToJoin: () => void;
}
