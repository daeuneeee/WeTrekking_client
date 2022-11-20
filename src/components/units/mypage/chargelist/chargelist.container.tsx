import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { errorModal, successModal } from "../../../commons/modals/alertModals";
import ChargeListUi from "./chargelist.presenter";
import {
  CANCLE_POINT_PAYMENT,
  FETCH_POINT_PAYMENTS,
} from "./chargelist.queries";

const ChargeList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [listId, setListId] = useState("");

  const onClickModalOn = (event: MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    setListId(event.currentTarget.id);
  };
  const onClickModalOff = () => {
    setIsActive(false);
  };

  const { data } =
    useQuery<Pick<IQuery, "fetchPointPayments">>(FETCH_POINT_PAYMENTS);

  console.log(data);

  const [cancelPointPayment] = useMutation(CANCLE_POINT_PAYMENT);

  const onChangePage = (page: number) => {
    setPageNum(page - 1);
  };

  const onClickcancelPoint = async () => {
    try {
      await cancelPointPayment({
        variables: {
          impUid: listId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("포인트를 환불하였습니다.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <ChargeListUi
      data={data}
      pageNum={pageNum}
      onChangePage={onChangePage}
      isActive={isActive}
      onClickModalOn={onClickModalOn}
      onClickModalOff={onClickModalOff}
      onClickcancelPoint={onClickcancelPoint}
    />
  );
};

export default ChargeList;
