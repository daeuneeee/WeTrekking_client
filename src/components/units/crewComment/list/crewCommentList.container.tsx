import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCrewSubCommentsArgs,
} from "../../../../commons/types/generated/types";
import CrewCommentListUi from "./crewCommentList.presenter";
import { FETCH_CREW_SUB_COMMENTS } from "./crewCommentList.queries";

const CrewCommentList = ({ commentsMap }) => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchCrewSubComments">,
    IQueryFetchCrewSubCommentsArgs
  >(FETCH_CREW_SUB_COMMENTS, {
    variables: {
      commentId: commentsMap.id,
      boardId: String(router.query.crewId),
    },
  });

  return <CrewCommentListUi commentsMap={commentsMap} data={data} />;
};

export default CrewCommentList;
