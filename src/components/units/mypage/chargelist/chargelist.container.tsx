import { useMutation, useQuery } from "@apollo/client";
import { errorModal } from "../../../commons/modals/alertModals";
import ChargeListUi from "./chargelist.presenter";
import {
  CANCLE_POINT_PAYMENT,
  FETCH_POINT_PAYMENTS,
} from "./chargelist.queries";

const ChargeList = () => {
  const result = useQuery(FETCH_POINT_PAYMENTS);

  console.log(result);

  const [cancelPointPayment] = useMutation(CANCLE_POINT_PAYMENT);

  const onClickcancelPoint = async () => {
    try {
      await cancelPointPayment({
        variables: {
          impUid: "",
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return <ChargeListUi />;
};

export default ChargeList;
