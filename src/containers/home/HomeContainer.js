import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponent from '../../components/home/HomeComponent';
import {
  requestPlayGame,
  requestLogout,
  requestLogoutDone
} from '../../actions';
import { getProfile } from '../../actions/actionFunction';

const mapStateToProps = state => ({
  ...state.ProfileReducer
});

class HomeContainer extends React.Component {
  componentDidMount() {
    const { dispatch, isRequest, user, logout } = this.props;
    if (user === null && !isRequest) {
      dispatch(getProfile());
    } else if (logout) {
      dispatch(requestLogoutDone());
    }
  }

  handleButtonPlayGame() {
    const { dispatch } = this.props;
    dispatch(requestPlayGame());
  }

  handleButtonLogout() {
    const { dispatch } = this.props;
    localStorage.removeItem('userToken');
    dispatch(requestLogout());
  }

  render() {
    const {
      user,
      error,
      requestDone,
      playgame,
      isRequest,
      logout
    } = this.props;

    if ((!isRequest && error !== null) || logout) {
      return <Redirect to="/login" />;
    }

    if (playgame) {
      return <Redirect to="/play" />;
    }

    if (user === null || !requestDone) {
      return <></>;
    }

    return (
      <HomeComponent
        user={user}
        handleButtonPlayGame={() => this.handleButtonPlayGame()}
        handleButtonLogout={() => this.handleButtonLogout()}
      />
    );
  }
}
export default connect(mapStateToProps)(HomeContainer);
