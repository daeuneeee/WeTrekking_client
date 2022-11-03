import { gql } from "@apollo/client";

export const CREATE_CREW_BOARD_T = gql`
  mutation createCrewBoardTEST($createCrewBoardInput: CreateCrewBoardInput!) {
    createCrewBoardTEST(createCrewBoardInput: $createCrewBoardInput) {
      id
      title
      description
      date
      address
      addressDetail
      gender
      dues
      peoples
    }
  }
`;
