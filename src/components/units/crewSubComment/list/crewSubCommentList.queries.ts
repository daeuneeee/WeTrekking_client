import { gql } from "@apollo/client";

export const DELETE_CREW_SUB_COMMENT = gql`
  mutation deleteCrewSubComment($subCommentId: String!) {
    deleteCrewSubComment(subCommentId: $subCommentId)
  }
`;

export const UPDATE_CREW_SUB_COMMENT = gql`
  mutation updateCrewSubComment(
    $subCommentId: String!
    $updateSubCrewCommentInput: UpdateSubCrewCommentInput!
  ) {
    updateCrewSubComment(
      subCommentId: $subCommentId
      updateSubCrewCommentInput: $updateSubCrewCommentInput
    ) {
      id
    }
  }
`;
