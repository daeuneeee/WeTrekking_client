import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import ReviewListUi from "./reviewList.presenter";
import { FETCH_REVIEWS } from "./reviewList.queries";

const ReviewList = () => {
  const [, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);
  const [reviewId, setReviewId] = useRecoilState(reviewIdState);

  const onClickList = (event) => {
    setIsOpenSideBar(true);
    setReviewId(event?.currentTarget.id);
  };

  const { data } = useQuery(FETCH_REVIEWS);

  return (
    <ReviewListUi data={data} onClickList={onClickList} reviewId={reviewId} />
  );
};

export default ReviewList;
