import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import PickedListUi from "./picked.presenter";
import { FETCH_DIBS } from "./picked.queries";

const PickedList = () => {
  const [visible, setVisible] = useState(9);

  const { data } = useQuery<Pick<IQuery, "fetchDibs">>(FETCH_DIBS);

  const pickedData = data?.fetchDibs.slice(0, visible);

  const onClickMore = () => {
    setVisible((prev) => prev + 9);
  };

  return (
    <PickedListUi
      pickedData={pickedData}
      onClickMore={onClickMore}
      visible={visible}
      data={data}
    />
  );
};

export default PickedList;
