import { useQuery } from "@apollo/client";
import CrewListUi from "./crewList.presenter";
import { FETCH_CREW_BOARDS } from "./crewList.queries";

const CrewList = () => {
  const { data } = useQuery(FETCH_CREW_BOARDS);
  console.log(data);
  return <CrewListUi data={data} />;
};

export default CrewList;
