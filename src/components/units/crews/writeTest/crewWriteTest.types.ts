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
}

export interface UseFormReturn<TFieldValues extends FieldValues = FieldValues> {
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
}

export interface ICrewWriteUiProps {
  peoples: number;
  onChangeTime: (time: Moment | null, timeString: string) => void;
  onChangeDate: DatePickerProps["onChange"];
  onChangePeoples: (event: number) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues> | any;
  onClickRegister: (data: IFormData) => void;
}
