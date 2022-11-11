import styled from "@emotion/styled";
import { Modal } from "antd";
import { tablet } from "../../../commons/styles/media";

const ConfirmModalBox = styled(Modal)`
  z-index: 9999;
  /* @media ${tablet} { */
  position: fixed;
  width: 90%;

  /* transform-origin: 0;
  top: 50%;
  left: 50;
  transform: translate(-50%, -50%); */
  /* } */
`;

const ConfirmModal = (props) => {
  return (
    <>
      <ConfirmModalBox
        title="알림"
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <p>{props.contents}</p>
      </ConfirmModalBox>
    </>
  );
};

export default ConfirmModal;
