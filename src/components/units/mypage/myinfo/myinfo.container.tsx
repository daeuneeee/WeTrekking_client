import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { userInfo } from "../../../../store";
import MyInfoUi from "./myinfo.presenter";

const MyInfo = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  return <MyInfoUi userDatas={userDatas} />;
};

export default MyInfo;
