import React from 'react';
import { connect } from 'react-redux';
import HistoryList from '../../components/gameplay/HistoryList';
import { handleOnHistoryClick } from '../../actions';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class HistoryListContainer extends React.Component {
  handleHistoryClick(index) {
    const { dispatch, playType } = this.props;
    if (playType === 2) {
      dispatch(handleOnHistoryClick(index));
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
