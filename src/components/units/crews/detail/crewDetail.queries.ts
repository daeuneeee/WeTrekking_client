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

export const FETCH_CREW_COMMENTS = gql`
  query fetchCrewComments($boardId: String!, $page: Int) {
    fetchCrewComments(boardId: $boardId, page: $page) {
      id
      comment
      createdAt
      # user {
      #   id
      #   nickname
      #   profile_img
      # }
      # subCrewComment {
      #   id
      #   comment
      # createdAt
      # user {
      #   id
      #   nickname
      #   profile_img
      # }
      # }
    }
  }
`;
