import { gql } from "@apollo/client";

export const DELETE_CREW_SUB_COMMENT = gql`
  mutation deleteCrewSubComment($subCommentId: String!) {
    deleteCrewSubComment(subCommentId: $subCommentId)
  }
`;

export const UPDATE_CREW_SUB_COMMENT = gql`
  mutation updateCrewSubComment(
    $updateComment: String!
    $subCommentId: String!
  ) {
    updateCrewSubComment(
      updateComment: $updateComment
      subCommentId: $subCommentId
    ) {
      id
    }
  }
`;
