import { gql } from "@apollo/client";

export const CREATE_CREW_SUB_COMMENT = gql`
  mutation createCrewSubComment(
    $createSubCrewCommentInput: CreateSubCrewCommentInput!
  ) {
    createCrewSubComment(
      createSubCrewCommentInput: $createSubCrewCommentInput
    ) {
      id
    }
  }
`;
