import { Modal, Select } from "antd";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { isPointModalToggleState, userInfo } from "../../../store";
import { IQuery } from "../../../commons/types/generated/types";
import "antd/dist/antd.css";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";

const PointContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .pointSelect {
    width: 100%;
  }
  .ant-btn:empty {
    display: none;
  }
`;

const CREATE_POINT_PAYMENT = gql`
  mutation createPointPayment($impUid: String!, $amount: Int!) {
    createPointPayment(impUid: $impUid, amount: $amount) {
      id
      impUid
    }
  }
`;

const PointBox = () => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [isOpen, setIsOpen] = useRecoilState<boolean>(isPointModalToggleState);
  const [point, setPoint] = useState("");

  console.log(point);

  const onClickModalToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangePoint = (value) => {
    setPoint(value);
  };

  const [craeetPoint] = useMutation(CREATE_POINT_PAYMENT);

  const onClickPointCharge = () => {
    setIsOpen((prev) => !prev);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp86152678"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `${point} 포인트 충전`,
        amount: 100,
        buyer_email: userDatas?.fetchUser.email,
        buyer_name: userDatas?.fetchUser.name,
        buyer_tel: userDatas?.fetchUser.phone,
      },
      async (rsp: any) => {
        // callback

        if (rsp.success) {
          // 결제 성공 시 로직,
          await craeetPoint({
            variables: {
              impUid: rsp.imp_uid,
              amount: Number(point),
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
  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Modal
        title="포인트 충전하기"
        open={isOpen}
        onOk={onClickPointCharge}
        onCancel={onClickModalToggle}
        okText={"충전하기"}
        cancelText={"취소"}
      >
        <PointContainer>
          <Select
            defaultValue="1000"
            allowClear
            options={[
              {
                value: "1000",
                label: "1000P",
              },
              {
                value: "3000",
                label: "3000P",
              },
              {
                value: "5000",
                label: "5000P",
              },
              {
                value: "10000",
                label: "10000P",
              },
              {
                value: "30000",
                label: "30000P",
              },
              {
                value: "50000",
                label: "50000P",
              },
              {
                value: "100000",
                label: "100000P",
              },
            ]}
            className="pointSelect"
            onChange={onChangePoint}
          />
        </PointContainer>
      </Modal>
    </>
  );
};

export default PointBox;
