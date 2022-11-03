import CrewWriteUiTest from "./crewWriteTest.presenter";
import type { DatePickerProps } from "antd";
import { useState } from "react";
import type { Moment } from "moment";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_CREW_BOARD_T } from "./crewWriteTest.queries";
import { IFormData } from "./crewWriteTest.types";

const CrewWriteTest = () => {
  const [peoples, setPeoples] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [createCrewBoardTest] = useMutation(CREATE_CREW_BOARD_T);
  const { register, handleSubmit } = useForm();

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };
  const onChangeTime = (time: Moment | null, timeString: string) => {
    console.log(time, timeString);
    setTime(timeString);
  };

  const onChangePeoples = (event: any) => {
    setPeoples(event);
  };

  const onClickRegister = async (data: IFormData) => {
    data.date = date;
    data.dateTime = time;
    data.dues = Number(data.dues);
    data.peoples = peoples;
    console.log(data);
    await createCrewBoardTest({ variables: { createCrewBoardInput: data } });
  };

  return (
    <CrewWriteUiTest
      peoples={peoples}
      onChangeDate={onChangeDate}
      onChangeTime={onChangeTime}
      onChangePeoples={onChangePeoples}
      register={register}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
    />
  );
};

export default CrewWriteTest;
