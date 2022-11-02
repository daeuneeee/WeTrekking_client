import { ChangeEvent, useRef, useState } from "react";
import JoinUi from "./join.presenter";

const Join = () => {
  const [isGenderCheck, setIsGenderCheck] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  const onChangePhoneInput01 = (event: ChangeEvent<HTMLSelectElement>) => {
    if (phoneInput01.current?.value.length === 3) {
      phoneInput02.current?.focus();
    }
  };
  const onChangePhoneInput02 = (event: ChangeEvent<HTMLInputElement>) => {
    if (phoneInput02.current?.value.length === 4) {
      phoneInput03.current?.focus();
    }
  };

  console.log();

  const onChangeGenderCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "male") {
      setIsGenderCheck("male");
    } else if (event.target.id === "female") {
      setIsGenderCheck("female");
    }
  };

  return (
    <JoinUi
      onChangeGenderCheck={onChangeGenderCheck}
      isGenderCheck={isGenderCheck}
      phoneInput01={phoneInput01}
      phoneInput02={phoneInput02}
      phoneInput03={phoneInput03}
      onChangePhoneInput01={onChangePhoneInput01}
      onChangePhoneInput02={onChangePhoneInput02}
    />
  );
};

export default Join;
