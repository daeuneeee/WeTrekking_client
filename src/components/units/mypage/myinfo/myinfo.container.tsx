import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { isPointModalToggleState, userInfo } from "../../../../store";
import MyInfoUi from "./myinfo.presenter";

const MyInfo = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [, setIsOpen] = useRecoilState<boolean>(isPointModalToggleState);

  const onClickPointModal = () => {
    setIsOpen(true);
  };

  return (
    <MyInfoUi userDatas={userDatas} onClickPointModal={onClickPointModal} />
  );
};

export default MyInfo;
