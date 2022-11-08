import { gql } from "@apollo/client";

export const FETCH_REVIEW = gql`
  query fetchReviewBoard($reviewBoardId: String!) {
    fetchReviewBoard(reviewBoardId: $reviewBoardId) {
      id
      title
      review
      star
      like
    }
  }
`;
