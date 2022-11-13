import { useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import ReviewListUi from "./reviewList.presenter";
import { FETCH_REVIEWS } from "./reviewList.queries";

const ReviewList = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);
  const [reviewId, setReviewId] = useRecoilState(reviewIdState);

  const onClickList = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpenSideBar(true);
    setReviewId(event?.currentTarget.id);
  };

  const { data } = useQuery<Pick<IQuery, "fetchReviewBoards">>(FETCH_REVIEWS);

  return (
    <ReviewListUi
      data={data}
      onClickList={onClickList}
      reviewId={reviewId}
      isOpenSideBar={isOpenSideBar}
    />
  );
};

export default ReviewList;
