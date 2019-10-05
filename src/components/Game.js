import React from 'react';
import { connect } from 'react-redux';
import '../content/Game.css';
import BoardContainer from '../containers/BoardContainer';
import HistoryListContainer from '../containers/HistoryListContainer';

function Game() {
  return (
    <div>
      <h3 className="game-title">Game caro việt nam</h3>
      <div className="game">
        <div className="game-board">
          <BoardContainer size={20} />
        </div>
        <HistoryListContainer />
      </div>
    </div>
  );
}

export default connect()(Game);
