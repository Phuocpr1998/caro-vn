import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import { handleOnBoardClick, resetGame } from '../actions';

const mapStateToProps = state => ({
  ...state
});

class BoardContainer extends React.Component {
  handleClick = (i, j) => {
    const { dispatch } = this.props;
    dispatch(handleOnBoardClick(i, j));
  };

  resetGame() {
    const { dispatch } = this.props;
    dispatch(resetGame());
  }

  render() {
    const { winner, squares, xIsNext, winPositions, size } = this.props;
    return (
      <Board
        size={size}
        squares={squares}
        winner={winner}
        xIsNext={xIsNext}
        handleClick={(i, j) => this.handleClick(i, j)}
        resetGame={() => this.resetGame()}
        winPositions={winPositions}
      />
    );
  }
}

export default connect(mapStateToProps)(BoardContainer);
