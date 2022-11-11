import { gql } from "@apollo/client";

export const SOCIAL_UPDATE_USER = gql`
  mutation socialUpdateUser(
    $phoneToken: String!
    $updateUserInput: UpdateUserInput!
  ) {
    socialUpdateUser(phoneToken: $phoneToken, updateUserInput: $updateUserInput)
  }
  {
    id
  }
`;
