import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

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
  isCheckNumActive: boolean;
  onClickSendToPhone: () => void;
  onClickCheckTokenToPhone: () => void;
  onChangePhoneToken: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUserProfile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCheckEmail: () => void;
  onClickCheckNickname: () => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  isEmailCheck: boolean;
  isNicknameCheck: boolean;
  isPhoneNumCheck: boolean;
  userDatas: Pick<IQuery, "fetchUser">;
  onClickUpdateUser: (data: IJoinData) => void;
  imgUrl: string;
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

export interface IMyUserInput {
  password?: string;
  nickname?: string;
  phone?: string;
  profile_img?: string;
}
