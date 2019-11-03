import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../content/dialog.css';

function Reconcile(props) {
  const {
    show,
    handleCancel,
    handleAccept,
    user,
    isReceiverRequestReconcile,
    isRequesting
  } = props;

  let requestGiveUpAnimation;

  if (isReceiverRequestReconcile) {
    requestGiveUpAnimation = <Modal.Body>Đối thủ xin hòa.</Modal.Body>;
  } else {
    requestGiveUpAnimation = isRequesting ? (
      <div className="loader-container">
        <div className="loader" />
      </div>
    ) : (
      <Modal.Body>Xác nhận xin hòa {user.name} ?</Modal.Body>
    );
  }

  const buttonGroup = isRequesting ? (
    <>
      <Button variant="primary" onClick={handleAccept} disabled>
        Xác nhận
      </Button>
      <Button variant="secondary" onClick={handleCancel} disabled>
        Hủy
      </Button>
    </>
  ) : (
    <>
      <Button variant="primary" onClick={handleAccept}>
        Xác nhận
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Hủy
      </Button>
    </>
  );

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Cầu hòa</Modal.Title>
        </Modal.Header>
        {requestGiveUpAnimation}
        <Modal.Footer className="button-group-center">
          {buttonGroup}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Reconcile;
