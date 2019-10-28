import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FindMatch from '../../../components/gameplay/dialog/FindMatch';
import { findRoom, findRoomFailed } from '../../../actions/socketAction';
import { playWithMachine } from '../../../actions';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class FindMatchContainer extends React.Component {
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

  handleClose() {
    const { show } = this.state;
    this.setState({
      show: !show
    });
  }

  handleFightWithOther() {
    const { dispatch, user } = this.props;
    dispatch(findRoom(user));
    setTimeout(() => {
      const { userPlayer } = this.props;
      if (userPlayer === null || userPlayer === undefined) {
        dispatch(findRoomFailed());
      }
    }, 15000);
  }

  handleFightWithMachine() {
    const { dispatch } = this.props;
    dispatch(playWithMachine());
  }

  render() {
    const { show } = this.state;
    const { user, userPlayer, playType, findingRoom } = this.props;
    if (
      !show &&
      (userPlayer === null || userPlayer === undefined) &&
      playType === 0
    ) {
      return <Redirect to="/" />;
    }
    return (
      <FindMatch
        show={show}
        user={user}
        findingRoom={findingRoom}
        handleFightWithOther={() => this.handleFightWithOther()}
        handleFightWithMachine={() => this.handleFightWithMachine()}
        handleClose={() => this.handleClose()}
      />
    );
  }
}

export default connect(mapStateToProps)(FindMatchContainer);
