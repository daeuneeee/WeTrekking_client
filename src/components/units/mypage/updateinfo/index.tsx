import Join from "../../members/join/join.container";
import MyPageNav from "../navigation";

interface IUpdateInfoUiProps {
  isUpdate: boolean;
}

const UpdateInfoUi = ({ isUpdate }: IUpdateInfoUiProps) => {
  return (
    <>
      <MyPageNav page="정보수정" />
      <Join isUpdate={isUpdate} />
    </>
  );
};

export default UpdateInfoUi;
