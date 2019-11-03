import React from 'react';
import '../../content/Game.css';
import BoardContainer from '../../containers/gameplay/BoardContainer';
import HistoryListContainer from '../../containers/gameplay/HistoryListContainer';
import ChatBoxContainer from '../../containers/gameplay/ChatBoxContainer';
import FindMatchContainer from '../../containers/gameplay/dialog/FindMatchContainer';
import EndGameContainer from '../../containers/gameplay/dialog/EndGameContainer';
import MovePermissionContainer from '../../containers/gameplay/dialog/MovePermissionContainer';
import ControlButtonContainer from '../../containers/gameplay/ControlButtonContainer';
import GiveUpContainer from '../../containers/gameplay/dialog/GiveUpContainer';
import ReconcileContainer from '../../containers/gameplay/dialog/ReconcileContainer';

function Game({ winner, partnerDisconnect, disconnectToServer, Xplayer }) {
  let endGameDialog = <></>;
  if (winner) {
    if (
      (Xplayer === 1 && winner === 'X') ||
      (Xplayer === 2 && winner === 'O')
    ) {
      endGameDialog = (
        <EndGameContainer message="Trận đấu kết thúc. Bạn là người chiến thắng." />
      );
    }
    if (
      (Xplayer === 2 && winner === 'X') ||
      (Xplayer === 1 && winner === 'O')
    ) {
      endGameDialog = (
        <EndGameContainer message="Trận đấu kết thúc. Thật đáng tiếc đối thủ quá mạnh." />
      );
    }
  } else if (partnerDisconnect) {
    endGameDialog = <EndGameContainer message="Đối thủ đã thoát" />;
  } else if (disconnectToServer) {
    endGameDialog = <EndGameContainer message="Mất kết nối tới máy chủ" />;
  }
  return (
    <>
      {endGameDialog}
      <GiveUpContainer />
      <ReconcileContainer />
      <FindMatchContainer />
      <MovePermissionContainer />
      <h3 className="game-title">Game caro việt nam</h3>
      <div className="game">
        <div className="game-board">
          <BoardContainer size={20} />
        </div>
        <div>
          <ControlButtonContainer />
          <HistoryListContainer />
          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}

export default Game;
