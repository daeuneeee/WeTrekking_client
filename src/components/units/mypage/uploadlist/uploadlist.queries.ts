import { gql } from "@apollo/client";

export const FETCH_HOST_CREW_LIST = gql`
  query fetchHostCrewList {
    fetchHostCrewList {
      id
      title
      description
      date
      dateTime
      address
      addressDetail
      gender
      dues
      peoples
      thumbnail
      createdAt
      mountain {
        id
        mountain
        address
      }
      user {
        id
        email
        name
        nickname
        birth
        phone
        gender
        profile_img
      }
    }
  }
`;
