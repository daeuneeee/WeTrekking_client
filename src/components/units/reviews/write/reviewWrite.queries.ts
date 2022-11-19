import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation createReviewBoard(
    $createReviewBoardInput: CreateReviewBoardInput!
    $crewUserListId: String!
    $imgURL: [String!]!
  ) {
    createReviewBoard(
      createReviewBoardInput: $createReviewBoardInput
      crewUserListId: $crewUserListId
      imgURL: $imgURL
    ) {
      id
      title
      review
      star
      like
    }
  }
`;

export const FETCH_CREW_BOARD = gql`
  query fetchCrewBoard($crewBoardId: String!) {
    fetchCrewBoard(crewBoardId: $crewBoardId) {
      id
      title
      description
      date
      dateTime
      addressDetail
      address
      gender
      dues
      peoples
      mountain {
        id
        mountain
        address
      }
      user {
        id
        nickname
        gender
        birth
        profile_img
      }
    }
  }
`;

export const UPLOAD_FILES_REVIEW = gql`
  mutation uploadFilesForReviewBoard($files: [Upload!]!) {
    uploadFilesForReviewBoard(files: $files)
  }
`;
