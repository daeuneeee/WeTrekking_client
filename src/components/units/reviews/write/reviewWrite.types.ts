import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

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
  crewBoardInfo?: Pick<IQuery, "fetchCrewBoard">;
  onClickToMypage: () => void;
}

export interface IFormData {
  title: string;
  star: number;
  review: string;
}
