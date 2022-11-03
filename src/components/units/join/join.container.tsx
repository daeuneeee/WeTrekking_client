import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import JoinUi from "./join.presenter";
import { CREATE_USER } from "./join.queries";
import { IJoinData } from "./join.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const joinYup = yup.object({
  email: yup.string().required("이메일은 필수 입력사항 입니다"),
  password: yup
    .string()
    .matches(
      /^[A-Za-z0-9]{8,16}$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력사항 입니다"),
  password2: yup
    .string()

    .oneOf([yup.ref("password"), null], "비밀번호가 서로 다릅니다."),
  name: yup.string().required("이름은 필수 입력사항 입니다.."),
  nickname: yup.string().required("닉네임은 필수 입력사항 입니다."),
  phone: yup.string().required("휴대전화는 필수 입력사항 입니다."),
});

const Join = () => {
  const [isGenderCheck, setIsGenderCheck] = useState("male");
  const [phone01, setPhone01] = useState("");
  const [phone02, setPhone02] = useState("");
  const [phone03, setPhone03] = useState("");
  const [email01, setEmail01] = useState("");
  const [email02, setEmail02] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(joinYup),
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
  const onChangeEmail01 = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail01(event.target.value);
  };
  const onChangeEmail02 = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail02(event.target.value);
  };

  const onChangeGenderCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "male") {
      setIsGenderCheck("male");
      setValue("gender", event.target.value);
    } else if (event.target.id === "female") {
      setIsGenderCheck("female");
      setValue("gender", event.target.value);
    }
  };

  const onClickJoinSubmit = async (data: IJoinData) => {
    try {
      data.phone = `${phone01}-${phone02}-${phone03}`;
      data.email = `${email01}${email02}`;
      data.profile_img = "";
      await createUser({
        variables: {
          createUserInput: data,
        },
      });
      alert("회원가입 성공");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
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
      onChangePhoneInput03={onChangePhoneInput03}
      onChangeEmail01={onChangeEmail01}
      onChangeEmail02={onChangeEmail02}
      register={register}
      handleSubmit={handleSubmit}
      onClickJoinSubmit={onClickJoinSubmit}
      formState={formState}
    />
  );
};

export default Join;
