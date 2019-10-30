import React from 'react';
import { connect } from 'react-redux';
import {
  requestGiveUp,
  requestGiveUpTimeout
} from '../../../actions/socketAction';
import GiveUp from '../../../components/gameplay/dialog/GiveUp';
import { requestGiveUpCancel } from '../../../actions';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class GiveUpContainer extends React.Component {
  handleAccept() {
    const { dispatch, user } = this.props;
    dispatch(requestGiveUp(user));
    setTimeout(() => {
      const { userPlayer } = this.props;
      if (userPlayer === null || userPlayer === undefined) {
        dispatch(requestGiveUpTimeout());
      }
    }, 15000);
  }

  handleCancel() {
    const { dispatch } = this.props;
    dispatch(requestGiveUpCancel());
  }

  render() {
    const { user, isRequestGiveUp, isReceiverRequestGiveUp } = this.props;
    return (
      <GiveUp
        show={isRequestGiveUp || isReceiverRequestGiveUp}
        user={user}
        isRequestGiveUp={isRequestGiveUp}
        isReceiverRequestGiveUp={isReceiverRequestGiveUp}
        handleAccept={() => this.handleAccept()}
        handleCancel={() => this.handleCancel()}
      />
    );
  }
}

export default connect(mapStateToProps)(GiveUpContainer);
