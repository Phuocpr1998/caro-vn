import React from 'react';
import { connect } from 'react-redux';
import HistoryList from '../components/HistoryList';
import {
  handleOnButtonSortClick,
  handleOnHistoryClick,
  checkWin
} from '../actions';

const mapStateToProps = state => ({
  ...state.BoardReducer
});

class HistoryListContainer extends React.Component {
  handleSortHistoryClick() {
    const { dispatch } = this.props;
    dispatch(handleOnButtonSortClick());
  }

  handleHistoryClick(index) {
    const { dispatch, history } = this.props;
    dispatch(handleOnHistoryClick(index));
    dispatch(
      checkWin(history[index].i, history[index].j, history[index].value)
    );
  }

  render() {
    const { history, indexHistorySelect } = this.props;
    return (
      <HistoryList
        history={history}
        indexHistorySelect={indexHistorySelect}
        handleSortHistoryClick={() => this.handleSortHistoryClick()}
        handleHistoryClick={index => this.handleHistoryClick(index)}
      />
    );
  }
}

export default connect(mapStateToProps)(HistoryListContainer);
