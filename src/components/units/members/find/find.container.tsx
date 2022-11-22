import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IMutation } from "../../../../commons/types/generated/types";
import { CHECK_TOKEN_PHONE, SEND_TOKEN_TO_PHONE } from "../join/join.queries";
import FindUi from "./find.presenter";
import { FIND_USER_EMAIL, FIND_USER_PASSWORD } from "./find.queries";
import { IFindEmail, IFindPassword, IFindProps } from "./find.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorModal, successModal } from "../../../commons/modals/alertModals";

const findEmailYup = yup.object({
  name: yup.string().required("이름은 필수 입력사항 입니다.."),
});
const findPasswordYup = yup.object({
  email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다.")
    .required("이메일은 필수 입력사항 입니다.."),
});

const Find = ({ findId }: IFindProps) => {
  const [phone01, setPhone01] = useState("");
  const [phone02, setPhone02] = useState("");
  const [phone03, setPhone03] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();
  const [phoneToken, setPhoneToken] = useState("");
  const [isCheckNumActive, setIsCheckNumActive] = useState(false);
  const [isPhoneNumCheck, setIsPhoneNumCheck] = useState(false);

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: findId ? yupResolver(findEmailYup) : yupResolver(findPasswordYup),
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

  const onChangePhoneToken = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneToken(event.target.value);
    setIsPhoneNumCheck(false);
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

  const [sendTokenToPhone] =
    useMutation<Pick<IMutation, "sendTokenToPhone">>(SEND_TOKEN_TO_PHONE);

  const onClickSendToPhone = async () => {
    try {
      if (phone01 && phone02 && phone03) {
        await sendTokenToPhone({
          variables: {
            phone: `${phone01}${phone02}${phone03}`,
          },
        });
        successModal("인증번호가 전송되었습니다.");
        setIsCheckNumActive(true);
      } else {
        errorModal("핸드폰 번호를 입력해주세요.");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const [CheckTokenPhone] =
    useMutation<Pick<IMutation, "checkTokenPhone">>(CHECK_TOKEN_PHONE);

  const onClickCheckTokenToPhone = async () => {
    try {
      const result = await CheckTokenPhone({
        variables: {
          phone: `${phone01}${phone02}${phone03}`,
          phoneToken,
        },
      });
      successModal(String(result.data?.checkTokenPhone));
      setIsPhoneNumCheck(true);
    } catch (error) {
      if (error instanceof Error) {
        errorModal("인증에 실패하였습니다.");
      }
    }
  };

  const [findEmail] =
    useMutation<Pick<IMutation, "findUserEmail">>(FIND_USER_EMAIL);

  const onClickFineEmail = async (data: IFindEmail) => {
    try {
      if (isPhoneNumCheck) {
        const result = await findEmail({
          variables: {
            name: data.name,
            phone: `${phone01}${phone02}${phone03}`,
            phoneToken,
          },
        });
        successModal(
          `${data?.name}님의 이메일은 ${String(
            result.data?.findUserEmail
          )}입니다.`
        );
        void router.push("/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const [findPassword] =
    useMutation<Pick<IMutation, "findUserPassword">>(FIND_USER_PASSWORD);

  const onClickFindPassword = async (data: IFindPassword) => {
    try {
      if (isPhoneNumCheck) {
        const result = await findPassword({
          variables: {
            name: data.name,
            email: data.email,
            phone: `${phone01}${phone02}${phone03}`,
            phoneToken,
          },
        });
        successModal(
          `${data.email}의 임시 비밀번호는 ${String(
            result.data?.findUserPassword
          )}입니다.`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
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
      isPhoneNumCheck={isPhoneNumCheck}
      isCheckNumActive={isCheckNumActive}
      onClickCheckTokenToPhone={onClickCheckTokenToPhone}
      onClickSendToPhone={onClickSendToPhone}
      onChangePhoneToken={onChangePhoneToken}
      onClickFineEmail={onClickFineEmail}
      onClickFindPassword={onClickFindPassword}
    />
  );
};

export default Find;
