import { ChangeEvent } from "react";

export interface IChatUiProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSendBtn: () => void;
}
