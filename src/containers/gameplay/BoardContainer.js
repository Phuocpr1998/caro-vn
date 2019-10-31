import React from 'react';
import { connect } from 'react-redux';
import Board from '../../components/gameplay/Board';
import { handleOnBoardClick, resetGame } from '../../actions';
import {
  findRoom,
  findRoomFailed,
  receiverMovePosition
} from '../../actions/socketAction';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

const randomPosition = squares => {
  const max = Math.sqrt(squares.length);
  while (true) {
    const i = Math.floor(Math.random() * (max - 1));
    const j = Math.floor(Math.random() * (max - 1));

    if (squares[i * max + j] === null || squares[i * max + j] === undefined) {
      return { i, j };
    }
  }
};

class BoardContainer extends React.Component {
  handleClick = (i, j) => {
    const { dispatch, playType, squares } = this.props;
    dispatch(handleOnBoardClick(i, j));
    if (playType === 2) {
      // play with machine
      const machinePosition = randomPosition(squares);
      setTimeout(() => {
        dispatch(receiverMovePosition(machinePosition.i, machinePosition.j));
      }, 500);
    }
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
    const { squares, winPositions, size } = this.props;
    return (
      <Board
        size={size}
        squares={squares}
        handleClick={(i, j) => this.handleClick(i, j)}
        resetGame={() => this.resetGame()}
        findRoom={() => this.findRoom()}
        winPositions={winPositions}
      />
    );
  }
}

export default connect(mapStateToProps)(BoardContainer);
