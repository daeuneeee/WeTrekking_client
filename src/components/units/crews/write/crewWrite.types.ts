import type { Moment } from "moment";
import type { DatePickerProps } from "antd";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { ChangeEvent } from "react";
import { RangePickerProps } from "antd/lib/date-picker";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  title: string;
  date: string;
  dateTime: string;
  address: string;
  addressDetail: string;
  dues: number;
  description: string;
  gender: string;
  peoples: number;
  thumbnail?: string;
  mountain: string;
}

export interface UseFormReturn<TFieldValues extends FieldValues = FieldValues> {
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
}

export interface ICrewWriteUiProps {
  onChangeTime: (time: Moment | null, timeString: string) => void;
  onChangeDate: DatePickerProps["onChange"];
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues> | any;
  onClickRegister: (data: IFormData) => void;
  isOpen: boolean;
  handleComplete: any;
  onToggleModal: () => void;
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  isClicked: string;
  people: number;
  onChangePeople: (event: number) => void;
  address: string;
  disabledDate: RangePickerProps["disabledDate"];
  onChangeFile: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  isEdit: boolean;
  data?: Pick<IQuery, "fetchCrewBoard">;
  onClickEdit: (data: IFormData) => void;
  onChangeDescription: (value: string) => void;
  editImageUrlsFlat: string[] | undefined;
  onClickMountainSearch: () => void;
  isMountainModalOpen: boolean;
  mountainAddress: string;
}
export interface ICrewWriteProps {
  isEdit: boolean;
}
