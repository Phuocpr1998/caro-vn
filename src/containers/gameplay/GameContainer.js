import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Game from '../../components/gameplay/Game';
import TilteComponent from '../../components/title/TitleComponent';
import { getProfile } from '../../actions/actionFunction';
import { connectToSocketServer } from '../../actions/socketAction';
import WaitingPage from '../../components/layout/WaitingPage';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user,
  error: state.ProfileReducer.error
});

class GameContainer extends React.Component {
  componentDidMount() {
    const { dispatch, isRequest, user } = this.props;
    if ((user === null || user === undefined) && !isRequest) {
      dispatch(getProfile());
    } else {
      dispatch(connectToSocketServer());
    }
    dispatch(connectToSocketServer());
  }

  render() {
    const {
      error,
      user,
      winner,
      disconnectToServer,
      partnerDisconnect
    } = this.props;

    if (error) {
      return <Redirect to="/login" />;
    }
    if (user === null || user === undefined) {
      return <WaitingPage />;
    }
    return (
      <>
        <TilteComponent title="Game caro online số một việt nam" />
        <Game
          winner={winner}
          disconnectToServer={disconnectToServer}
          partnerDisconnect={partnerDisconnect}
        />
      </>
    );
  }
}

export default connect(mapStateToProps)(GameContainer);
