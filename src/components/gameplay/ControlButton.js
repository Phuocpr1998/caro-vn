import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../content/Game.css';

function ControlButton(props) {
  const { handleUndo, handleGiveUp, handleExit, playType } = props;

  let buttonGroup;
  if (playType !== 2) {
    buttonGroup = (
      <>
        <Button type="button" variant="primary" onClick={handleUndo}>
          Xin lùi cờ
        </Button>
        <Button type="button" variant="danger" onClick={handleGiveUp}>
          Xin thua
        </Button>
      </>
    );
  } else {
    buttonGroup = (
      <Link className="btn btn-danger" onClick={handleExit} to="/">
        Thoát
      </Link>
    );
  }

  return (
    <>
      <div className="title">Chức năng</div>
      <div className="control-button">{buttonGroup}</div>
    </>
  );
}

export default ControlButton;
