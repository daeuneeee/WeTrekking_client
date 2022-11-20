import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import ApplyListUi from "./applylist.presenter";
import {
  DELETE_CREW_USER_LIST,
  FETCH_CREW_USER_LIST,
} from "./applylist.queries";

const ApplyList = () => {
  const [isActive, setIsActive] = useState(false);
  const [listId, setListId] = useState("");
  const [pageNum, setPageNum] = useState(0);

  const { data } =
    useQuery<Pick<IQuery, "fetchCrewUserList">>(FETCH_CREW_USER_LIST);
  console.log(data);

  const [deleteCrewuserList] = useMutation(DELETE_CREW_USER_LIST);

  const onClickModalOn = (event: MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    setListId(event.currentTarget.id);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onChangePage = (page: number) => {
    console.log(page);
    setPageNum(page - 1);
  };

  const crewCancelBtn = async () => {
    try {
      await deleteCrewuserList({
        variables: {
          crewBoardId: listId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setIsActive(false);
      alert("신청이 취소되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <ApplyListUi
      data={data}
      crewCancelBtn={crewCancelBtn}
      onClickModalOn={onClickModalOn}
      onClickModalOff={onClickModalOff}
      isActive={isActive}
      onChangePage={onChangePage}
      pageNum={pageNum}
    />
  );
};

export default ApplyList;
