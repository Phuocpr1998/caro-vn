import React from 'react';
import { Button } from 'react-bootstrap';
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
      <Button type="button" variant="danger" onClick={handleExit}>
        Thoát
      </Button>
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
