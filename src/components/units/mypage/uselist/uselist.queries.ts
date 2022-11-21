import { gql } from "@apollo/client";

export const FETCH_POINT_HISTORY = gql`
  query fetchPointHistory($page: Int) {
    fetchPointHistory(page: $page) {
      id
      amount
      createdAt
    }
  }
`;
