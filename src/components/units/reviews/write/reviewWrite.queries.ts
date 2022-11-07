import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReviewBoard($createReviewBoardInput: CreateReviewBoardInput!) {
    createReviewBoard(createReviewBoardInput: $createReviewBoardInput) {
      id
      title
      review
      star
      like
    }
  }
`;
