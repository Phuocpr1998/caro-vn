import React from 'react';
import '../../content/Game.css';
import BoardContainer from '../../containers/gameplay/BoardContainer';
import HistoryListContainer from '../../containers/gameplay/HistoryListContainer';
import ChatBoxContainer from '../../containers/gameplay/ChatBoxContainer';
import FindMatchContainer from '../../containers/gameplay/dialog/FindMatchContainer';
import ControlButton from './ControlButton';

function Game() {
  return (
    <>
      <FindMatchContainer />
      <h3 className="game-title">Game caro việt nam</h3>
      <div className="game">
        <div className="game-board">
          <BoardContainer size={20} />
        </div>
        <div>
          <ControlButton />
          <HistoryListContainer />
          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}

export default Game;
