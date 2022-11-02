import { ChangeEvent } from "react";

export interface IJoinUiProps {
  onChangeGenderCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  isGenderCheck: string;
  phoneInput01: any;
  phoneInput02: any;
  phoneInput03: any;
  onChangePhoneInput01: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePhoneInput02: (event: ChangeEvent<HTMLInputElement>) => void;
}
