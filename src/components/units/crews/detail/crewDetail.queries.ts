import { gql } from "@apollo/client";

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
    }
  }
`;
