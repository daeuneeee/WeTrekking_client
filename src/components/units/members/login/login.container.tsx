import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../store";
import LoginUi from "./login.presenter";
import { LOGIN } from "./login.queries";
import { ILoginProps } from "./login.types";

const Login = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isCheck, setIsCheck] = useState(false);

  const router = useRouter();

  const [login] = useMutation(LOGIN);
  const { register, handleSubmit } = useForm();

  const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };

  const onClickToJoin = () => {
    void router.push("/join");
  };

  const onClickLogin = async (data: ILoginProps) => {
    try {
      const result = await login({
        variables: data,
      });
      setAccessToken(result.data.login);
      void router.push("/crews");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <LoginUi
      onChangeCheckBox={onChangeCheckBox}
      isCheck={isCheck}
      onClickToJoin={onClickToJoin}
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
};

export default Login;
