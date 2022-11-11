import { useRecoilState } from "recoil";
import { userInfo } from "../../store";
import { IQuery } from "../types/generated/types";

const [userDatas, setUserDatas] =
  useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);

export const onClickPointCharge = (data) => {
  const IMP = window.IMP; // 생략 가능
  IMP.init("imp86152678"); // Example: imp00000000

  IMP.request_pay(
    {
      // param
      pg: "nice",
      pay_method: "card",
      // merchant_uid: "ORD20180131-0000011",
      name: `${data.point} 포인트 충전`,
      amount: data.point,
      buyer_email: userDatas?.fetchUser.email,
      buyer_name: userDatas?.fetchUser.name,
      buyer_tel: userDatas?.fetchUser.phone,
    },
    async (rsp: any) => {
      // callback

      if (rsp.success) {
        // 결제 성공 시 로직,
        console.log(rsp);
        await pointCharge({
          variables: {
            impUid: rsp.imp_uid,
          },
          update(cache) {
            cache.modify({
              fields: () => {},
            });
          },
        });
      } else {
        // 결제 실패 시 로직,
        alert("충전이 실패했습니다. 다시 시도해주세요.");
      }
    }
  );
};
