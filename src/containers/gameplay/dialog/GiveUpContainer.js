import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { findRoom, findRoomFailed } from '../../../actions/socketAction';
import { playWithMachine } from '../../../actions';
import GiveUp from '../../../components/gameplay/dialog/GiveUp';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class GiveUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentDidUpdate() {
    const { userPlayer } = this.props;
    const { show } = this.state;
    if (userPlayer !== null && userPlayer !== undefined && show) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        show: false
      });
    }
  }

  handleAccept() {
    const { dispatch, user } = this.props;
    dispatch(findRoom(user));
    setTimeout(() => {
      const { userPlayer } = this.props;
      if (userPlayer === null || userPlayer === undefined) {
        dispatch(findRoomFailed());
      }
    }, 15000);
  }

  handleCancel() {
    const { dispatch } = this.props;
    dispatch(playWithMachine());
  }

  render() {
    const { show } = this.state;
    const {
      user,
      userPlayer,
      playType,
      isRequestGiveUp,
      isReceiverRequestGiveUp
    } = this.props;
    if (
      !show &&
      (userPlayer === null || userPlayer === undefined) &&
      playType === 0
    ) {
      return <Redirect to="/" />;
    }
    return (
      <GiveUp
        show={show}
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
