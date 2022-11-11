import ReviewCommentListUi from "./reviewCommentList.presenter";

const ReviewCommentList = ({ reviewCommentsMap }) => {
  return <ReviewCommentListUi reviewCommentsMap={reviewCommentsMap} />;
};

export default ReviewCommentList;
