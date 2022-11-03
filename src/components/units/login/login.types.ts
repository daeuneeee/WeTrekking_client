import { ChangeEvent } from "react";

export interface ILoginUiProps {
  onChangeCheckBox: (event: ChangeEvent<HTMLInputElement>) => void;
  isCheck: boolean;
  onClickToJoin: () => void;
  register: any;
  handleSubmit: any;
  onClickLogin: (data: ILoginProps) => void;
}

export interface ILoginProps {
  email: string;
  password: string;
}
