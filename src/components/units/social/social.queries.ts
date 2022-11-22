import { gql } from "@apollo/client";

export const SOCIAL_UPDATE_USER = gql`
  mutation socialUpdateUser($updateUserInput: UpdateUserInput!) {
    socialUpdateUser(updateUserInput: $updateUserInput) {
      id
    }
  }
`;

// 수정
