import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../content/dialog.css';

function MovePermission({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn phải đợi đối phương đánh trước</Modal.Body>
        <Modal.Footer className="button-group-center">
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovePermission;
