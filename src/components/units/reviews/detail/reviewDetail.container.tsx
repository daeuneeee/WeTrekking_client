import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchReviewBoardArgs,
} from "../../../../commons/types/generated/types";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import ReviewDetailUi from "./reviewDetail.presenter";
import { FETCH_REVIEW, FETCH_REVIEW_COMMENTS } from "./reviewDetail.queries";

const ReviewDetail = () => {
  const [reviewId] = useRecoilState(reviewIdState);
  const [, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);

  const { data } = useQuery<
    Pick<IQuery, "fetchReviewBoard">,
    IQueryFetchReviewBoardArgs
  >(FETCH_REVIEW, {
    variables: { reviewBoardId: reviewId },
  });

  const onClickX = () => {
    setIsOpenSideBar(false);
  };

  const { data: reviewComments } = useQuery(FETCH_REVIEW_COMMENTS, {
    variables: { reviewBoardId: reviewId },
  });

  return (
    <ReviewDetailUi
      data={data}
      onClickX={onClickX}
      reviewComments={reviewComments}
    />
  );
};

export default ReviewDetail;
