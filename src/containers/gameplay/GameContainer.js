import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Game from '../../components/gameplay/Game';
import TilteComponent from '../../components/title/TitleComponent';
import { getProfile } from '../../actions/actionFunction';
import { connectToSocketServer } from '../../actions/socketAction';

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
    const { error } = this.props;
    if (error) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <TilteComponent title="Game caro online số một việt nam" />
        <Game />
      </>
    );
  }
}

export default connect(mapStateToProps)(GameContainer);