import { useQuery } from "@apollo/client";
import ApplyListUi from "./applylist.presenter";
import { FETCH_CREW_USER_LIST } from "./applylist.queries";

const ApplyList = () => {
  const { data } = useQuery(FETCH_CREW_USER_LIST);
  console.log(data);

  return <ApplyListUi />;
};

export default ApplyList;
