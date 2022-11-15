import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import PickedListUi from "./picked.presenter";
import { FETCH_DIBS } from "./picked.queries";

const PickedList = () => {
  const { data } = useQuery<Pick<IQuery, "fetchDibs">>(FETCH_DIBS);

  console.log(data);

  return <PickedListUi data={data} />;
};

export default PickedList;
