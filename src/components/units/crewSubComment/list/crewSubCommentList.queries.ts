import { gql } from "@apollo/client";

export const DELETE_CREW_SUB_COMMENT = gql`
  mutation deleteCrewSubComment($commentId: String!) {
    deleteCrewSubComment(commentId: $commentId)
  }
`;

export const UPDATE_CREW_SUB_COMMENT = gql`
  mutation updateCrewSubComment(
    $updateSubCrewCommentInput: UpdateSubCrewCommentInput!
  ) {
    updateCrewSubComment(
      updateSubCrewCommentInput: $updateSubCrewCommentInput
    ) {
      id
    }
  }
`;
