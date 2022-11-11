import { gql } from "@apollo/client";

export const CREATE_CREW_BOARD = gql`
  mutation createCrewBoard(
    $createCrewBoardInput: CreateCrewBoardInput!
    $imgURL: [String!]!
  ) {
    createCrewBoard(
      createCrewBoardInput: $createCrewBoardInput
      imgURL: $imgURL
    ) {
      id
    }
  }
`;

export const UPLOAD_FILES_CREW = gql`
  mutation uploadFilesForCrewBoard($files: [Upload!]!) {
    uploadFilesForCrewBoard(files: $files)
  }
`;
