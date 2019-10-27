import React from 'react';
import '../../content/Game.css';
import BoardContainer from '../../containers/gameplay/BoardContainer';
import HistoryListContainer from '../../containers/gameplay/HistoryListContainer';
import ChatBoxContainer from '../../containers/gameplay/ChatBoxContainer';

function Game() {
  return (
    <>
      <h3 className="game-title">Game caro việt nam</h3>
      <div className="game">
        <div className="game-board">
          <BoardContainer size={20} />
        </div>
        <div>
          <HistoryListContainer />
          <ChatBoxContainer />
        </div>
      </div>
    </>
  );
}

export default Game;
