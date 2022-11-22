// import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SocialJoinUi from "./social.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  CHECK_NICKNAME,
  CHECK_TOKEN_PHONE,
  SEND_TOKEN_TO_PHONE,
} from "../members/join/join.queries";
import { useMutation } from "@apollo/client";
import { IMutation } from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../commons/modals/alertModals";
import { SOCIAL_UPDATE_USER } from "./social.queries";

const socialJoinYup = yup.object({
  birth: yup.string().required("생년월일은 필수 입력사항 입니다"),
  name: yup.string().required("이름은 필수 입력사항 입니다.."),
});

const SocialJoin = () => {
  const [isGenderCheck, setIsGenderCheck] = useState("male");
  const [isNicknameCheck, setIsNicknameCheck] = useState(false);
  const [isPhoneNumCheck, setIsPhoneNumCheck] = useState(false);
  const [isCheckNumActive, setIsCheckNumActive] = useState(false);
  const [nickname, setNickname] = useState("");
  const [phone01, setPhone01] = useState("");
  const [phone02, setPhone02] = useState("");
  const [phone03, setPhone03] = useState("");
  const [phoneToken, setPhoneToken] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(socialJoinYup),
    mode: "onChange",
  });

  const router = useRouter();

  useEffect(() => {
    setValue("gender", isGenderCheck);
  }, []);

  const onChangePhoneInput01 = (event: ChangeEvent<HTMLSelectElement>) => {
    if (phoneInput01.current?.value.length === 3) {
      phoneInput02.current?.focus();
    }
    setPhone01(event.target.value);
    setIsPhoneNumCheck(false);
  };
  const onChangePhoneInput02 = (event: ChangeEvent<HTMLInputElement>) => {
    if (phoneInput02.current?.value.length === 4) {
      phoneInput03.current?.focus();
    }
    setPhone02(event.target.value);
    setIsPhoneNumCheck(false);
  };
  const onChangePhoneInput03 = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone03(event.target.value);
    setIsPhoneNumCheck(false);
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

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event?.target.value);
    setValue("nickname", event.target.value);
    setIsNicknameCheck(false);
  };

  const [sendTokenToPhone] =
    useMutation<Pick<IMutation, "sendTokenToPhone">>(SEND_TOKEN_TO_PHONE);

  const onClickSendToPhone = async () => {
    try {
      await sendTokenToPhone({
        variables: {
          phone: `${phone01}${phone02}${phone03}`,
        },
      });
      successModal("인증번호가 전송되었습니다.");
      setIsCheckNumActive(true);
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

  const onChangePhoneToken = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneToken(event.target.value);
    setIsPhoneNumCheck(false);
  };

  const [checkNickname] =
    useMutation<Pick<IMutation, "checkNickName">>(CHECK_NICKNAME);

  const onClickCheckNickname = async () => {
    if (nickname) {
      const { data } = await checkNickname({
        variables: {
          nickname,
        },
      });
      if (data?.checkNickName === "true") {
        successModal("사용가능한 닉네임입니다.");
        setIsNicknameCheck(true);
      } else {
        errorModal("사용중인 닉네임 입니다.");
      }
    } else {
      errorModal("닉네임을 입력해 주세요.");
    }
  };

  const [socialUpdateUser] = useMutation(SOCIAL_UPDATE_USER);

  const onClickSocialUpdate = async (data: any) => {
    try {
      if (!isNicknameCheck) {
        errorModal("닉네임 중복확인을 해주세요.");
      } else if (!isPhoneNumCheck) {
        errorModal("휴대폰 인증을 해주세요.");
      } else {
        data.phone = `${phone01}${phone02}${phone03}`;
        await socialUpdateUser({
          variables: {
            updateUserInput: data,
          },
        });
        void router.push("/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
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
      onChangeNickname={onChangeNickname}
      onClickSendToPhone={onClickSendToPhone}
      onClickCheckTokenToPhone={onClickCheckTokenToPhone}
      onChangePhoneToken={onChangePhoneToken}
      onClickCheckNickname={onClickCheckNickname}
      handleSubmit={handleSubmit}
      formState={formState}
      isCheckNumActive={isCheckNumActive}
      isNicknameCheck={isNicknameCheck}
      isPhoneNumCheck={isPhoneNumCheck}
      onClickSocialUpdate={onClickSocialUpdate}
    />
  );
};

export default SocialJoin;
