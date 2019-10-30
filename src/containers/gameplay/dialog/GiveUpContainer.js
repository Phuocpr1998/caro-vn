import React from 'react';
import { connect } from 'react-redux';
import {
  requestGiveUp,
  requestGiveUpTimeout,
  sendResponseGiveUpAccept,
  sendResponseGiveUpCancel
} from '../../../actions/socketAction';
import GiveUp from '../../../components/gameplay/dialog/GiveUp';
import { giveUpCancel } from '../../../actions';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class GiveUpContainer extends React.Component {
  handleAccept() {
    const { dispatch, user, isRequestGiveUp } = this.props;
    if (isRequestGiveUp) {
      dispatch(requestGiveUp(user));
      setTimeout(() => {
        const { isRequesting } = this.props;
        if (isRequesting) {
          dispatch(requestGiveUpTimeout());
        }
      }, 15000);
    } else {
      dispatch(sendResponseGiveUpAccept());
    }
  }

  handleCancel() {
    const { dispatch, isRequestGiveUp } = this.props;
    if (isRequestGiveUp) {
      dispatch(giveUpCancel());
    } else {
      dispatch(sendResponseGiveUpCancel());
    }
  }

  render() {
    const {
      user,
      isRequestGiveUp,
      isReceiverRequestGiveUp,
      isRequesting
    } = this.props;
    return (
      <GiveUp
        show={isRequestGiveUp || isReceiverRequestGiveUp}
        user={user}
        isRequesting={isRequesting}
        isReceiverRequestGiveUp={isReceiverRequestGiveUp}
        handleAccept={() => this.handleAccept()}
        handleCancel={() => this.handleCancel()}
      />
    );
  }
}

export default connect(mapStateToProps)(GiveUpContainer);
