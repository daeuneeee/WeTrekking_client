import { gql } from "@apollo/client";

export const FETCH_CREW_USER_LIST = gql`
  query fetchCrewUserList {
    fetchCrewUserList {
      id
      status
      user {
        id
        name
      }
      crewBoard {
        id
        title
        description
        date
        dateTime
        addressDetail
        address
        gender
        mountain {
          id
          mountain
        }
      }
    }
  }
`;

export const DELETE_CREW_USER_LIST = gql`
  mutation deleteCrewUserList($crewBoardId: String!) {
    deleteCrewUserList(crewBoardId: $crewBoardId)
  }
`;
