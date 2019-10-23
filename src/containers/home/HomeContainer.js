import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponent from '../../components/home/HomeComponent';
import { requestPlayGame, requestLogout } from '../../actions';
import { getProfile } from '../../actions/actionFunction';

const mapStateToProps = state => ({
  ...state.ProfileReducer
});

class HomeContainer extends React.Component {
  handleButtonPlayGame() {
    const { dispatch } = this.props;
    dispatch(requestPlayGame());
  }

  handleButtonLogout() {
    const { dispatch } = this.props;
    dispatch(requestLogout());
  }

  render() {
    const {
      user,
      dispatch,
      error,
      requestDone,
      logout,
      playgame,
      isRequest
    } = this.props;
    if (error !== null) {
      return <Redirect to="/login" />;
    }

    if (user === null || !requestDone) {
      if (!isRequest) {
        dispatch(getProfile());
      }
      return <></>;
    }

    if (logout) {
      localStorage.removeItem('userToken');
      return <Redirect to="/login" />;
    }

    if (playgame) {
      return <Redirect to="/play" />;
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
