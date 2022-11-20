import { gql } from "@apollo/client";

export const FETCH_VISIT_LIST = gql`
  query fetchVisitList {
    fetchVisitList {
      id
      user {
        id
        name
        nickname
        birth
        gender
        profile_img
      }
      crewBoard {
        id
        title
        date
        dateTime
        thumbnail
        mountain {
          mountain
        }
        createdAt
        user {
          name
          nickname
          birth
          gender
          profile_img
        }
      }
    }
  }
`;
