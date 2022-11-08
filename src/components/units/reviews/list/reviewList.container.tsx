import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isOpenSideBarState } from "../../../../store";
import ReviewListUi from "./reviewList.presenter";
import { FETCH_REVIEWS } from "./reviewList.queries";

const ReviewList = () => {
  const [, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);

  const onClickList = () => {
    setIsOpenSideBar((prev) => !prev);
  };

  const { data } = useQuery(FETCH_REVIEWS);

  return <ReviewListUi data={data} onClickList={onClickList} />;
};

export default ReviewList;
