import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../content/dialog.css';

function FindMatch(props) {
  const { show, handleClose, user } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Find Match</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn đã sẵn sàng {user.name} ?</Modal.Body>
        <Modal.Footer className="button-group-center">
          <Button variant="primary" onClick={handleClose}>
            Tìm đối thủ
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Chơi với máy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FindMatch;
