import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import ReviewDetailUi from "./reviewDetail.presenter";
import { FETCH_REVIEW } from "./reviewDetail.queries";

const ReviewDetail = () => {
  const [reviewId] = useRecoilState(reviewIdState);
  const [, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);

  const { data } = useQuery(FETCH_REVIEW, {
    variables: { reviewBoardId: reviewId },
  });

  const onClickX = () => {
    setIsOpenSideBar(false);
  };

  return <ReviewDetailUi data={data} onClickX={onClickX} />;
};

export default ReviewDetail;
