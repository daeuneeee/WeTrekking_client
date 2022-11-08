import { ChangeEvent } from "react";

export interface IFindUiProps {
  register: any;
  findId: boolean;
  phoneInput01: any;
  phoneInput02: any;
  phoneInput03: any;
  onChangePhoneInput01: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePhoneInput02: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneInput03: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: any;
  formState: any;
  onClickToFindId: () => void;
  onClickToFindPw: () => void;
  onClickToJoin: () => void;
}
