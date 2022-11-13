// import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SocialJoinUi from "./social.presenter";

const SocialJoin = () => {
  const [isGenderCheck, setIsGenderCheck] = useState("male");
  const [, setPhone01] = useState("");
  const [, setPhone02] = useState("");
  const [, setPhone03] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  // const router = useRouter();

  const { register } = useForm({
    mode: "onChange",
  });

  const onChangePhoneInput01 = (event: ChangeEvent<HTMLSelectElement>) => {
    if (phoneInput01.current?.value.length === 3) {
      phoneInput02.current?.focus();
    }
    setPhone01(event.target.value);
  };
  const onChangePhoneInput02 = (event: ChangeEvent<HTMLInputElement>) => {
    if (phoneInput02.current?.value.length === 4) {
      phoneInput03.current?.focus();
    }
    setPhone02(event.target.value);
  };
  const onChangePhoneInput03 = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone03(event.target.value);
  };

  const onChangeGenderCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "male") {
      setIsGenderCheck("male");
    } else if (event.target.id === "female") {
      setIsGenderCheck("female");
    }
  };

  return (
    <SocialJoinUi
      phoneInput01={phoneInput01}
      phoneInput02={phoneInput02}
      phoneInput03={phoneInput03}
      onChangePhoneInput01={onChangePhoneInput01}
      onChangePhoneInput02={onChangePhoneInput02}
      onChangePhoneInput03={onChangePhoneInput03}
      onChangeGenderCheck={onChangeGenderCheck}
      isGenderCheck={isGenderCheck}
      register={register}
    />
  );
};

export default SocialJoin;
