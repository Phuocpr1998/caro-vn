import React from 'react';
import { Button } from 'react-bootstrap';
import '../../content/Game.css';

function ControlButton(props) {
  const { handleUndo, handleGiveUp } = props;
  return (
    <>
      <div className="title">Chức năng</div>
      <div className="control-button">
        <Button type="button" variant="primary" onClick={handleUndo}>
          Xin lùi cờ
        </Button>
        <Button type="button" variant="danger" onClick={handleGiveUp}>
          Xin thua
        </Button>
      </div>
    </>
  );
}

export default ControlButton;
