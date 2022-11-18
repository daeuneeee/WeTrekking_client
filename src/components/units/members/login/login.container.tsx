import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IMutation } from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../store";
import { errorModal, successModal } from "../../../commons/modals/alertModals";
import LoginUi from "./login.presenter";
import { LOGIN } from "./login.queries";
import { ILoginProps } from "./login.types";

const Login = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [isCheck, setIsCheck] = useState(false);

  const router = useRouter();

  const [login] = useMutation<Pick<IMutation, "login">>(LOGIN);
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

  const onClickToFindId = () => {
    void router.push("/findid");
  };

  const onClickLogin = async (data: ILoginProps) => {
    try {
      const result = await login({
        variables: data,
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setAccessToken(String(result.data?.login));
      void router.push("/crews");
      successModal("로그인 성공");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
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
      onClickToFindId={onClickToFindId}
    />
  );
};

export default Login;
