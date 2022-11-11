import { gql } from "@apollo/client";

export const FETCH_CREW_BOARDS_LATEST = gql`
  query fetchCrewBoardsLatestFirst {
    fetchCrewBoardsLatestFirst {
      id
      title
      date
      dateTime
      peoples
      createdAt
    }
  }
`;

export const FETCH_CREW_BOARDS_DEADLINE = gql`
  query fetchCrewBoardsDeadlineFirst {
    fetchCrewBoardsDeadlineFirst {
      id
      title
      date
      dateTime
      peoples
      createdAt
    }
  }
`;
