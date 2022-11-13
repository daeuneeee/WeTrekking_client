import { gql } from "@apollo/client";

export const FIND_USER_EMAIL = gql`
  mutation findUserEmail(
    $name: String!
    $phone: String!
    $phoneToken: String!
  ) {
    findUserEmail(name: $name, phone: $phone, phoneToken: $phoneToken)
  }
`;

export const FIND_USER_PASSWORD = gql`
  mutation findUserPassword(
    $name: String!
    $email: String!
    $phone: String!
    $phoneToken: String!
  ) {
    findUserPassword(
      name: $name
      email: $email
      phone: $phone
      phoneToken: $phoneToken
    )
  }
`;
