import React from 'react';
import { connect } from 'react-redux';
import HistoryList from '../../components/gameplay/HistoryList';
import { handleOnHistoryClick } from '../../actions';
import { receiverMovePosition } from '../../actions/socketAction';

const mapStateToProps = state => ({
  ...state.GameReducer
});

const randomPosition = squares => {
  const max = Math.sqrt(squares.length);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const i = Math.floor(Math.random() * (max - 1));
    const j = Math.floor(Math.random() * (max - 1));

    if (squares[i * max + j] === null || squares[i * max + j] === undefined) {
      return { i, j };
    }
  }
};

class HistoryListContainer extends React.Component {
  handleHistoryClick(index) {
    const { dispatch, playType, squares } = this.props;
    if (playType === 2) {
      dispatch(handleOnHistoryClick(index));
      if ((index + 1) % 2 === 1) {
        const machinePosition = randomPosition(squares);
        setTimeout(() => {
          dispatch(receiverMovePosition(machinePosition.i, machinePosition.j));
        }, 500);
      }
    }
  }

  render() {
    const { history, indexHistorySelect } = this.props;
    return (
      <HistoryList
        history={history}
        indexHistorySelect={indexHistorySelect}
        handleHistoryClick={index => this.handleHistoryClick(index)}
      />
    );
  }
}

export default connect(mapStateToProps)(HistoryListContainer);
