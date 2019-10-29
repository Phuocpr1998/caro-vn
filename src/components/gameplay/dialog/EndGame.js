import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../content/dialog.css';

function EndGame({ show, handleClose, message }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">End Match</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer className="button-group-center">
          <Button variant="primary" onClick={handleClose}>
            Ván mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EndGame;
