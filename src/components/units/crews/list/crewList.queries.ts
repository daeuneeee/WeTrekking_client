import { gql } from "@apollo/client";

export const FETCH_CREW_BOARDS = gql`
  query fetchCrewBoardsTEST {
    fetchCrewBoardsTEST {
      id
      title
      date
      dateTime
      peoples
    }
  }
`;
