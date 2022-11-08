import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FindUi from "./find.presenter";

interface IFindProps {
  findId: boolean;
}

const Find = ({ findId }: IFindProps) => {
  const [phone01, setPhone01] = useState("");
  const [phone02, setPhone02] = useState("");
  const [phone03, setPhone03] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  const router = useRouter();

  const { register, handleSubmit, setValue, formState } = useForm({
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

  const onClickToFindId = () => {
    void router.push("/findid");
  };
  const onClickToFindPw = () => {
    void router.push("/findpw");
  };
  const onClickToJoin = () => {
    void router.push("/join");
  };

  return (
    <FindUi
      findId={findId}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      phoneInput01={phoneInput01}
      phoneInput02={phoneInput02}
      phoneInput03={phoneInput03}
      onChangePhoneInput01={onChangePhoneInput01}
      onChangePhoneInput02={onChangePhoneInput02}
      onChangePhoneInput03={onChangePhoneInput03}
      onClickToFindId={onClickToFindId}
      onClickToFindPw={onClickToFindPw}
      onClickToJoin={onClickToJoin}
    />
  );
};

export default Find;
