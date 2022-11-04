import { useState } from "react";
import CrewWriteUi from "./crewWrite.presenter";
import type { Moment } from "moment";
import type { DatePickerProps } from "antd";

const CrewWrite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("gender01");
  const [people, setPeople] = useState(0);
  const [, setDate] = useState("");
  const [, setTime] = useState("");

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };
  const onChangeTime = (time: Moment | null, timeString: string) => {
    console.log(time, timeString);
    setTime(timeString);
  };

  const onChangeRadio = (event) => {
    console.log(event);
    if (event.target.checked) {
      setIsClicked(event.target.id);
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address) => {
    onToggleModal();
  };

  const onChangePeople = (event: any) => {
    setPeople(event);
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
    />
  );
};

export default CrewWrite;
