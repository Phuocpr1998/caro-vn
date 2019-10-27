import React from 'react';
import { connect } from 'react-redux';
import Board from '../../components/gameplay/Board';
import { handleOnBoardClick, resetGame } from '../../actions';
import { findRoom, findRoomFailed } from '../../actions/socketAction';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
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

  findRoom() {
    const { dispatch, user } = this.props;
    dispatch(findRoom(user));
    setTimeout(() => {
      const { userPlayer } = this.props;
      if (userPlayer === null || userPlayer === undefined) {
        dispatch(findRoomFailed());
      }
    }, 10000);
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
        findRoom={() => this.findRoom()}
        winPositions={winPositions}
      />
    );
  }
}

export default connect(mapStateToProps)(BoardContainer);
