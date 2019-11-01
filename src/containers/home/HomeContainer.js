import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponent from '../../components/home/HomeComponent';
import { requestLogout, requestLogoutDone } from '../../actions/actionProfile';
import { getProfile } from '../../actions/actionFunction';
import WaitingPage from '../../components/layout/WaitingPage';

const mapStateToProps = state => ({
  ...state.ProfileReducer
});

class HomeContainer extends React.Component {
  componentDidMount() {
    const { dispatch, user, logout } = this.props;
    if (user === null) {
      dispatch(getProfile());
    } else if (logout) {
      dispatch(requestLogoutDone());
    }
  }

  handleButtonLogout() {
    const { dispatch } = this.props;
    localStorage.removeItem('userToken');
    dispatch(requestLogout());
  }

  render() {
    const { user, error, logout } = this.props;

    if (error !== null || logout) {
      return <Redirect to="/login" />;
    }

    if (user === null) {
      return <WaitingPage />;
    }

    return (
      <HomeComponent
        user={user}
        handleButtonLogout={() => this.handleButtonLogout()}
      />
    );
  }
}
export default connect(mapStateToProps)(HomeContainer);
