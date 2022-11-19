import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  crewBoardIdState,
  isPointModalToggleState,
  userInfo,
} from "../../../../store";
import MyInfoUi from "./myinfo.presenter";
import { FETCH_VISIT_LIST } from "./myInfo.queries";

const MyInfo = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [, setIsOpen] = useRecoilState<boolean>(isPointModalToggleState);
  const [, setCrewBoardId] = useRecoilState(crewBoardIdState);

  const { data } = useQuery<Pick<IQuery, "fetchVisitList">>(FETCH_VISIT_LIST);

  console.log(data);

  const router = useRouter();

  const onClickPointModal = () => {
    setIsOpen(true);
  };

  const onClickToReviewWrite = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push("/reviews/write");
    setCrewBoardId(event.currentTarget.id);
  };

  return (
    <MyInfoUi
      userDatas={userDatas}
      onClickPointModal={onClickPointModal}
      onClickToReviewWrite={onClickToReviewWrite}
      data={data}
    />
  );
};

export default MyInfo;
