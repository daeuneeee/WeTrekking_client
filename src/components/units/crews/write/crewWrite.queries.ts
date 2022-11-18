import { gql } from "@apollo/client";

export const CREATE_CREW_BOARD = gql`
  mutation createCrewBoard(
    $createCrewBoardInput: CreateCrewBoardInput!
    $imgURL: [String!]!
    $mountainId: String!
  ) {
    createCrewBoard(
      createCrewBoardInput: $createCrewBoardInput
      imgURL: $imgURL
      mountainId: $mountainId
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

export const UPDATE_CREW_BOARD = gql`
  mutation updateCrewBoard(
    $crewBoardId: String!
    $updateCrewBoardInput: UpdateCrewBoardInput!
    $imgURL: [String!]!
  ) {
    updateCrewBoard(
      crewBoardId: $crewBoardId
      updateCrewBoardInput: $updateCrewBoardInput
      imgURL: $imgURL
    ) {
      id
    }
  }
`;
