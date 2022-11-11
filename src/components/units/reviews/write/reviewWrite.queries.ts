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

export const UPLOAD_FILES_REVIEW = gql`
  mutation uploadFilesForReviewBoard($files: [Upload!]!) {
    uploadFilesForReviewBoard(files: $files)
  }
`;
