import { useQuery } from "@apollo/client";
import { useState } from "react";
import UseListUi from "./uselist.presetner";
import { FETCH_POINT_HISTORY } from "./uselist.queries";

const UseList = () => {
  const [pageNum, setPageNum] = useState(1);

  const onChangePage = (page: number) => {
    setPageNum(page);
  };

  const { data } = useQuery(FETCH_POINT_HISTORY, {
    variables: {
      page: pageNum,
    },
  });

  return <UseListUi data={data} onChangePage={onChangePage} />;
};

export default UseList;
