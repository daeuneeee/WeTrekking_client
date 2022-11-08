import { ChangeEvent } from "react";

export interface IJoinUiProps {
  onChangeGenderCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  isGenderCheck: string;
  phoneInput01: any;
  phoneInput02: any;
  phoneInput03: any;
  onChangePhoneInput01: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePhoneInput02: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneInput03: (event: ChangeEvent<HTMLInputElement>) => void;
  register: any;
  handleSubmit: any;
  onClickJoinSubmit: (data: IJoinData) => void;
  formState: any;
  isUpdate: boolean;
}

export interface IJoinData {
  email: string;
  password: string;
  passwordConfirm?: string;
  name: string;
  nickname: string;
  phone: string;
  gender: string;
  profile_img: string;
}

export interface IJoinProps {
  isUpdate: boolean;
}
