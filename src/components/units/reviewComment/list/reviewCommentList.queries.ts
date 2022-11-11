import { gql } from "@apollo/client";

export const DELETE_REVIEW_COMMENT = gql`
  mutation deleteReviewComment($reviewCommentId: String!) {
    deleteReviewComment(reviewCommentId: $reviewCommentId)
  }
`;

export const UPDATE_REVIEW_COMMENT = gql`
  mutation updateReviewComment(
    $reviewCommentId: String!
    $updateComment: String!
  ) {
    updateReviewComment(
      reviewCommentId: $reviewCommentId
      updateComment: $updateComment
    ) {
      id
      reviewComment
      createdAt
    }
  }
`;
