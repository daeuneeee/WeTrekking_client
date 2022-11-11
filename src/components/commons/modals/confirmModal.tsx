import { Modal } from "antd";

const ConfirmModal = (props) => {
  return (
    <>
      <Modal
        title="알림"
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <p>{props.contents}</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
