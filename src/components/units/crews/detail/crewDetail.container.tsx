import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardImageArgs,
  IQueryFetchCrewBoardArgs,
  IQueryFetchCrewCommentsArgs,
} from "../../../../commons/types/generated/types";
import CrewDetailUi from "./crewDetail.presenter";
import {
  FETCH_BOARD_IMAGE,
  FETCH_CREW_BOARD,
  FETCH_CREW_COMMENTS,
} from "./crewDetail.queries";

const CrewDetail = () => {
  const router = useRouter();

  const { data: comments, fetchMore } = useQuery<
    Pick<IQuery, "fetchCrewComments">,
    IQueryFetchCrewCommentsArgs
  >(FETCH_CREW_COMMENTS, {
    variables: { boardId: String(router.query.crewId) },
  });

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewBoard">,
    IQueryFetchCrewBoardArgs
  >(FETCH_CREW_BOARD, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  const { data: crewImg } = useQuery<
    Pick<IQuery, "fetchBoardImage">,
    IQueryFetchBoardImageArgs
  >(FETCH_BOARD_IMAGE, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  const onLoadMore = async () => {
    if (!comments) return;
    await fetchMore({
      variables: {
        page: Math.ceil(comments.fetchCrewComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchCrewComments === undefined) {
          return {
            fetchCrewComments: [...prev.fetchCrewComments],
          };
        }
        return {
          fetchCrewComments: [
            ...prev.fetchCrewComments,
            ...fetchMoreResult.fetchCrewComments,
          ],
        };
      },
    });
  };

  return (
    <CrewDetailUi
      data={data}
      comments={comments}
      onLoadMore={onLoadMore}
      crewImg={crewImg}
    />
  );
};

export default CrewDetail;
