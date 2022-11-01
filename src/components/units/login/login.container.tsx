import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LoginUi from "./login.presenter";

const Login = () => {
  const [isCheck, setIsCheck] = useState(false);

  const router = useRouter();

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

  return (
    <LoginUi
      onChangeCheckBox={onChangeCheckBox}
      isCheck={isCheck}
      onClickToJoin={onClickToJoin}
    />
  );
};

export default Login;
