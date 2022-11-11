import { ChangeEvent } from "react";

export interface ICrewReviewWriteUiProps {
  register: any;
  handleSubmit: any;
  onChangeRate: (value: number) => void;
  onClickRegister: (data: any) => void;
  onChangeFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  errors: any;
}

export interface IFormData {
  title: string;
  star: number;
  review: string;
}
