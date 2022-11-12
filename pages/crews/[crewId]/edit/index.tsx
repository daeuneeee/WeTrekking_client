import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_CREW_BOARD } from "../../../../src/components/units/crews/detail/crewDetail.queries";
import CrewWrite from "../../../../src/components/units/crews/write/crewWrite.container";

const CrewEditPage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_CREW_BOARD, {
    variables: { crewBoardId: router.query.crewId },
  });

  return <CrewWrite isEdit={true} data={data} />;
};

export default CrewEditPage;
