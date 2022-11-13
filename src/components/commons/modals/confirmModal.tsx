import styled from "@emotion/styled";
import { Modal } from "antd";
import { tablet } from "../../../commons/styles/media";

const ConfirmModalBox = styled(Modal)`
  z-index: 9999;
  /* @media ${tablet} { */
  position: fixed;
  width: 90%;
`;

interface iConfirmModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  contents: string;
}

const ConfirmModal = (props: iConfirmModalProps) => {
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
