import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchCrewBoardArgs,
} from "../../../../commons/types/generated/types";
import CrewDetailUi from "./crewDetail.presenter";
import { FETCH_CREW_BOARD } from "./crewDetail.queries";

const CrewDetail = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewBoard">,
    IQueryFetchCrewBoardArgs
  >(FETCH_CREW_BOARD, {
    variables: { crewBoardId: String(router.query.crewId) },
  });
  console.log(data);

  return <CrewDetailUi data={data} />;
};

export default CrewDetail;
