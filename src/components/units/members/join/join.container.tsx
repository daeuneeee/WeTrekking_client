import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import JoinUi from "./join.presenter";
import {
  CHECK_TOKEN_PHONE,
  CREATE_USER,
  CHECK_EMAIL,
  SEND_TOKEN_TO_PHONE,
  UPLOAD_FILE_FOR_USER_PROFILE,
  CHECK_NICKNAME,
  UPDATE_USER,
} from "./join.queries";
import { IJoinData, IJoinProps } from "./join.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { userInfo } from "../../../../store";
import { useRecoilState } from "recoil";

const joinYup = yup.object({
  birth: yup.string().required("생년월일은 필수 입력사항 입니다"),

  password: yup
    .string()
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/,
      "영문+숫자&특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력사항 입니다"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 서로 다릅니다."),
  name: yup.string().required("이름은 필수 입력사항 입니다.."),
});

const updateInfoYup = yup.object({
  password: yup
    .string()
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,16}$/,
      "영문+숫자&특수문자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호는 필수 입력사항 입니다"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 서로 다릅니다."),
});

const Join = ({ isUpdate }: IJoinProps) => {
  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    resolver: isUpdate ? yupResolver(updateInfoYup) : yupResolver(joinYup),
    mode: "onChange",
  });

  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [isGenderCheck, setIsGenderCheck] = useState("male");
  const [userProfile, setUserProfile] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isNicknameCheck, setIsNicknameCheck] = useState(false);
  const [isPhoneNumCheck, setIsPhoneNumCheck] = useState(false);
  const [isCheckNumActive, setIsCheckNumActive] = useState(false);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone01, setPhone01] = useState("");
  const [phone02, setPhone02] = useState("");
  const [phone03, setPhone03] = useState("");
  const [phoneToken, setPhoneToken] = useState("");
  const phoneInput01 = useRef<HTMLInputElement>();
  const phoneInput02 = useRef<HTMLInputElement>();
  const phoneInput03 = useRef<HTMLInputElement>();

  const router = useRouter();

  useEffect(() => {
    if (!isUpdate) {
      setValue("gender", isGenderCheck);
    }
  }, []);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

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

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
    setValue("email", event.target.value);
    setIsEmailCheck(false);
  };

  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event?.target.value);
    setValue("nickname", event.target.value);
    setIsNicknameCheck(false);
  };

  const [sendTokenToPhone] = useMutation(SEND_TOKEN_TO_PHONE);

  const onClickSendToPhone = async () => {
    try {
      await sendTokenToPhone({
        variables: {
          phone: `${phone01}${phone02}${phone03}`,
        },
      });
      alert("인증번호가 전송되었습니다.");
      setIsCheckNumActive(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const [CheckTokenPhone] = useMutation(CHECK_TOKEN_PHONE);

  const onClickCheckTokenToPhone = async () => {
    try {
      const result = await CheckTokenPhone({
        variables: {
          phone: `${phone01}${phone02}${phone03}`,
          phoneToken,
        },
      });
      console.log(result);
      alert(result.data.checkTokenPhone);
      setIsPhoneNumCheck(true);
    } catch (error) {
      if (error instanceof Error) {
        alert("인증에 실패하였습니다.");
      }
    }
  };

  const onChangePhoneToken = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneToken(event.target.value);
    setIsPhoneNumCheck(false);
  };

  const [checkEmail] = useMutation(CHECK_EMAIL);

  const onClickCheckEmail = async () => {
    console.log(getValues("email"));
    const { data } = await checkEmail({
      variables: {
        email,
      },
    });
    if (email.includes("@") && email.includes(".")) {
      if (data.checkEmail === "true") {
        alert("사용가능한 이메일 입니다.");
        setIsEmailCheck(true);
      } else if (data.checkEmail === "false") {
        alert("이미 사용중인 이메일 입니다.");
      }
    } else {
      alert("올바른 이메일 형식이 아닙니다.");
    }
  };

  const [checkNickname] = useMutation(CHECK_NICKNAME);

  const onClickCheckNickname = async () => {
    if (nickname) {
      const { data } = await checkNickname({
        variables: {
          nickname,
        },
      });
      if (data.checkNickName === "true") {
        alert("사용가능한 닉네임입니다.");
        setIsNicknameCheck(true);
      } else {
        alert("사용중인 닉네임 입니다.");
      }
    } else {
      alert("닉네임을 입력해 주세요.");
    }
  };

  const [uploadUserProfile] = useMutation(UPLOAD_FILE_FOR_USER_PROFILE);

  const onChangeUserProfile = async (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
    const { data } = await uploadUserProfile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setUserProfile(data.uploadFileForUserProfile);
  };

  const onClickJoinSubmit = async (data: IJoinData) => {
    try {
      if (!isEmailCheck) {
        alert("이메일 중복확인을 해주세요.");
      } else if (!isNicknameCheck) {
        alert("닉네임 중복확인을 해주세요.");
      } else if (!isPhoneNumCheck) {
        alert("휴대폰 인증을 해주세요.");
      } else {
        delete data.passwordConfirm;
        data.phone = `${phone01}${phone02}${phone03}`;
        data.profile_img = "";
        await createUser({
          variables: {
            createUserInput: data,
          },
        });
        alert("회원가입 성공");
        void router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const [updateUser] = useMutation(UPDATE_USER);

  const onClickUpdateUser = async (data: IJoinData) => {
    try {
      const myUserInput = {};
      if (data.password) {
        myUserInput.password = data.password;
      }
      if (nickname) {
        myUserInput.nickname = nickname;
      }
      if (phone01 && phone02 && phone03) {
        myUserInput.phone = `${phone01}${phone02}${phone03}`;
      }
      if (data.profile_img) {
        myUserInput.profile_img = data.profile_img;
      }

      if (nickname && !isNicknameCheck) {
        alert("닉네임 중복확인을 해주세요.");
      } else if (phone01 && phone02 && phone03 && !isPhoneNumCheck) {
        alert("휴대폰 인증을 해주세요.");
      } else {
        console.log(myUserInput);
        await updateUser({
          variables: {
            email: userDatas?.fetchUser.email,
            updateUserInput: myUserInput,
          },
          update(cache) {
            cache.modify({
              fields: () => {},
            });
          },
        });
      }
      alert("정보수정이 완료 되었습니다.");
      void router.push("/crews");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
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
      register={register}
      handleSubmit={handleSubmit}
      onClickJoinSubmit={onClickJoinSubmit}
      formState={formState}
      isUpdate={isUpdate}
      isCheckNumActive={isCheckNumActive}
      onClickSendToPhone={onClickSendToPhone}
      onClickCheckTokenToPhone={onClickCheckTokenToPhone}
      onChangePhoneToken={onChangePhoneToken}
      onChangeUserProfile={onChangeUserProfile}
      userProfile={userProfile}
      onClickCheckEmail={onClickCheckEmail}
      onClickCheckNickname={onClickCheckNickname}
      onChangeEmail={onChangeEmail}
      onChangeNickname={onChangeNickname}
      isEmailCheck={isEmailCheck}
      isNicknameCheck={isNicknameCheck}
      isPhoneNumCheck={isPhoneNumCheck}
      userDatas={userDatas}
      onClickUpdateUser={onClickUpdateUser}
    />
  );
};

export default Join;
