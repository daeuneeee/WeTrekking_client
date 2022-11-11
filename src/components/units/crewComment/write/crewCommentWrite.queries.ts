import { gql } from "@apollo/client";

export const CREATE_CREW_COMMENT = gql`
  mutation createCrewComment($createCrewCommentInput: CreateCrewCommentInput!) {
    createCrewComment(createCrewCommentInput: $createCrewCommentInput) {
      id
    }
  }
`;
