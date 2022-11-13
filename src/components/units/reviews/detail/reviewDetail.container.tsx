import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchReviewBoardArgs,
  IQueryFetchReviewCommentsArgs,
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

  const { data: reviewComments, fetchMore } = useQuery<
    Pick<IQuery, "fetchReviewComments">,
    IQueryFetchReviewCommentsArgs
  >(FETCH_REVIEW_COMMENTS, {
    variables: { reviewBoardId: reviewId },
  });

  const onLoadMore = async () => {
    if (!reviewComments) return;
    await fetchMore({
      variables: {
        page: Math.ceil(reviewComments.fetchReviewComments.length / 9) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchReviewComments === undefined) {
          return {
            fetchReviewComments: [...prev.fetchReviewComments],
          };
        }
        return {
          fetchReviewComments: [
            ...prev.fetchReviewComments,
            ...fetchMoreResult.fetchReviewComments,
          ],
        };
      },
    });
  };

  return (
    <ReviewDetailUi
      data={data}
      onClickX={onClickX}
      reviewComments={reviewComments}
      onLoadMore={onLoadMore}
    />
  );
};

export default ReviewDetail;
