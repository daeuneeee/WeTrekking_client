import { useState } from "react";
import CrewWriteUi from "./crewWrite.presenter";
import type { Moment } from "moment";
import type { DatePickerProps } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_CREW_BOARD_T } from "./crewWrite.queries";

const CrewWrite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("남자만");
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const { register, handleSubmit } = useForm();

  const [createCrewBoardTest] = useMutation(CREATE_CREW_BOARD_T);

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };
  const onChangeTime = (time: Moment | null, timeString: string) => {
    setTime(timeString);
  };

  const onChangeRadio = (event) => {
    if (event.target.checked) {
      setIsClicked(event.target.id);
      setGender(event.target.id);
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address) => {
    onToggleModal();
    setAddress(address.address);
  };

  const onChangePeople = (event: any) => {
    setPeople(event);
  };

  const onClickToRegister = async (data: IFormData) => {
    data.date = date;
    data.dateTime = time;
    data.dues = Number(data.dues);
    data.peoples = people;
    data.address = address;
    data.gender = gender;
    console.log(data);
    await createCrewBoardTest({ variables: { createCrewBoardInput: data } });
  };

  return (
    <CrewWriteUi
      onChangeDate={onChangeDate}
      onChangeTime={onChangeTime}
      isOpen={isOpen}
      handleComplete={handleComplete}
      onToggleModal={onToggleModal}
      onChangeRadio={onChangeRadio}
      isClicked={isClicked}
      onChangePeople={onChangePeople}
      people={people}
      register={register}
      handleSubmit={handleSubmit}
      onClickToRegister={onClickToRegister}
      address={address}
    />
  );
};

export default CrewWrite;
