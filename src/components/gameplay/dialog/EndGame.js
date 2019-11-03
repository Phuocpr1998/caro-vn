import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
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
          <Link className="btn btn-primary" onClick={handleClose} to="/">
            Ván mới
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EndGame;
