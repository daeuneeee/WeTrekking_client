import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CrewListUi from "./crewList.presenter";
import { FETCH_CREW_BOARDS } from "./crewList.queries";

const CrewList = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_CREW_BOARDS);

  const onClickToWrite = () => {
    void router.push("/crews/write");
  };

  return <CrewListUi data={data} onClickToWrite={onClickToWrite} />;
};

export default CrewList;
