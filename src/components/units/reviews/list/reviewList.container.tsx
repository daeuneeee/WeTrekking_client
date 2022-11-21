import { useQuery } from "@apollo/client";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../../../commons/types/generated/types";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import ReviewListUi from "./reviewList.presenter";
import { FETCH_REVIEWS } from "./reviewList.queries";

const ReviewList = () => {
  const [number, setNumber] = useState(0);

  const [isOpenSideBar, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);
  const [reviewId, setReviewId] = useRecoilState(reviewIdState);

  useEffect(() => {
    return () => {
      setIsOpenSideBar(false);
    };
  }, []);

  const { data } = useQuery<Pick<IQuery, "fetchReviewBoards">>(FETCH_REVIEWS);

  const onClickList = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpenSideBar(true);
    setReviewId(event?.currentTarget.id);
  };

  const onChangePage = (page: number) => {
    setNumber(page - 1);
  };

  return (
    <ReviewListUi
      data={data}
      onClickList={onClickList}
      reviewId={reviewId}
      isOpenSideBar={isOpenSideBar}
      number={number}
      onChangePage={onChangePage}
    />
  );
};

export default ReviewList;
