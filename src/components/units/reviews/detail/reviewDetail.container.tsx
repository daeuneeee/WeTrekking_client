import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationDeleteReviewBoardArgs,
  IQuery,
  IQueryFetchReviewBoardArgs,
  IQueryFetchReviewBoardImageArgs,
  IQueryFetchReviewCommentsArgs,
} from "../../../../commons/types/generated/types";
import { isOpenSideBarState, reviewIdState } from "../../../../store";
import { errorModal, successModal } from "../../../commons/modals/alertModals";
import { FETCH_USER } from "../../crews/detail/crewDetail.queries";
import ReviewDetailUi from "./reviewDetail.presenter";
import {
  DELETE_REVIEW_BOARD,
  FETCH_REVIEW,
  FETCH_REVIEW_COMMENTS,
  FETCH_REVIEW_IMAGE,
} from "./reviewDetail.queries";

const ReviewDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [crewId, setCrewId] = useState("");

  const [reviewId] = useRecoilState(reviewIdState);
  const [, setIsOpenSideBar] = useRecoilState(isOpenSideBarState);

  const { data } = useQuery<
    Pick<IQuery, "fetchReviewBoard">,
    IQueryFetchReviewBoardArgs
  >(FETCH_REVIEW, {
    variables: { reviewBoardId: reviewId },
  });

  const { data: userInform } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const { data: reviewComments, fetchMore } = useQuery<
    Pick<IQuery, "fetchReviewComments">,
    IQueryFetchReviewCommentsArgs
  >(FETCH_REVIEW_COMMENTS, {
    variables: { reviewBoardId: reviewId },
  });

  const { data: reviewImg } = useQuery<
    Pick<IQuery, "fetchReviewBoardImage">,
    IQueryFetchReviewBoardImageArgs
  >(FETCH_REVIEW_IMAGE, { variables: { reviewBoardId: reviewId } });

  console.log(reviewImg);
  const [deleteReviewBoard] = useMutation<
    Pick<IMutation, "deleteReviewBoard">,
    IMutationDeleteReviewBoardArgs
  >(DELETE_REVIEW_BOARD);

  const userId = userInform?.fetchUser.id;

  const onClickX = () => {
    setIsOpenSideBar(false);
  };
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

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCrewId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };

  const onClickModalConfirm = async () => {
    try {
      await deleteReviewBoard({
        variables: {
          reviewBoardId: crewId,
        },
        update(cache) {
          cache.modify({ fields: { fetchReviewBoards: () => {} } });
        },
      });
      successModal("정상적으로 삭제되었습니다.");
      setIsOpenSideBar(false);
      setIsModalOpen(false);
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
    }
  };

  return (
    <ReviewDetailUi
      data={data}
      onClickX={onClickX}
      reviewComments={reviewComments}
      onLoadMore={onLoadMore}
      onClickShowModal={onClickShowModal}
      onClickModalConfirm={onClickModalConfirm}
      onClickCancelModal={onClickCancelModal}
      isModalOpen={isModalOpen}
      userId={userId}
      reviewImg={reviewImg}
    />
  );
};

export default ReviewDetail;
