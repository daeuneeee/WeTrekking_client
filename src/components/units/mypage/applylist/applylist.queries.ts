import { gql } from "@apollo/client";

export const FETCH_CREW_USER_LIST = gql`
  query fetchCrewUserList {
    fetchCrewUserList {
      id
      status
      crewBoard
    }
  }
`;
