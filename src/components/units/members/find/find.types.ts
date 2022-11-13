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
  isPhoneNumCheck: boolean;
  isCheckNumActive: boolean;
  onClickCheckTokenToPhone: () => void;
  onClickSendToPhone: () => void;
  onChangePhoneToken: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickFineEmail: (data: IFindEmail) => void;
  onClickFindPassword: (data: IFindPassword) => void;
}

export interface IFindEmail {
  name: string;
  phone: string;
  phoneToken: string;
}

export interface IFindPassword {
  name: string;
  email: string;
  phone: string;
  phoneToken: string;
}

export interface IFindProps {
  findId: boolean;
}
