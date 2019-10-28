import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../../content/dialog.css';

function FindMatch(props) {
  const {
    show,
    handleClose,
    handleFightWithOther,
    handleFightWithMachine,
    user,
    findingRoom
  } = props;

  const findingAnimation = findingRoom ? (
    <div className="loader-container">
      <div className="loader" />
    </div>
  ) : (
    <Modal.Body>Bạn đã sẵn sàng {user.name} ?</Modal.Body>
  );

  const buttonMatch = findingRoom ? (
    <>
      <Button variant="primary" onClick={handleFightWithOther} disabled>
        Tìm đối thủ
      </Button>
      <Button variant="secondary" onClick={handleFightWithMachine} disabled>
        Chơi với máy
      </Button>
    </>
  ) : (
    <>
      <Button variant="primary" onClick={handleFightWithOther}>
        Tìm đối thủ
      </Button>
      <Button variant="secondary" onClick={handleFightWithMachine}>
        Chơi với máy
      </Button>
    </>
  );

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Find Match</Modal.Title>
        </Modal.Header>
        {findingAnimation}
        <Modal.Footer className="button-group-center">
          {buttonMatch}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FindMatch;
