import React from 'react';
import { connect } from 'react-redux';
import HistoryList from '../components/gameplay/HistoryList';
import { handleOnButtonSortClick, handleOnHistoryClick } from '../actions';

const mapStateToProps = state => ({
  ...state
});

class HistoryListContainer extends React.Component {
  handleSortHistoryClick() {
    const { dispatch } = this.props;
    dispatch(handleOnButtonSortClick());
  }

  handleHistoryClick(index) {
    const { dispatch } = this.props;
    dispatch(handleOnHistoryClick(index));
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
