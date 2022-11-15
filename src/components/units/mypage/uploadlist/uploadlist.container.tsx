import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { DELETE_CREW_BOARD } from "../../crews/detail/crewDetail.queries";
import UploadListUi from "./uploadlist.presenter";
import { FETCH_HOST_CREW_LIST } from "./uploadlist.queries";

const UploadList = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [crewId, setCrewId] = useState("");

  const { data } =
    useQuery<Pick<IQuery, "fetchHostCrewList">>(FETCH_HOST_CREW_LIST);

  const [deleteCrewBoard] = useMutation(DELETE_CREW_BOARD);

  const onClickModalToggle = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalActive((prev) => !prev);
    setCrewId(event.currentTarget.id);
  };

  const onClickModalCancel = () => {
    setIsModalActive(false);
  };

  const onClickListDel = async () => {
    try {
      await deleteCrewBoard({
        variables: { crewBoardId: crewId },
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      alert("정상적으로 삭제되었습니다.");
      setIsModalActive(false);
    } catch (error) {}
  };

  return (
    <UploadListUi
      data={data}
      isModalActive={isModalActive}
      onClickModalToggle={onClickModalToggle}
      onClickListDel={onClickListDel}
      onClickModalCancel={onClickModalCancel}
    />
  );
};

export default UploadList;
