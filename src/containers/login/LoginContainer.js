import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/login/LoginForm';
import {
  emailLoginChange,
  passwordLoginChange
} from '../../actions/actionLogin';
import { login } from '../../actions/actionFunction';

const mapStateToProps = state => ({
  ...state.LoginReducer
});

class LoginContainer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, user, isRequest } = this.props;
    if (!isRequest) {
      dispatch(login(user));
    }
  }

  handleEmailChange(e) {
    const { dispatch } = this.props;
    dispatch(emailLoginChange(e.target.value));
  }

  handlePasswordChange(e) {
    const { dispatch } = this.props;
    dispatch(passwordLoginChange(e.target.value));
  }

  render() {
    const { isRequest, error, requestDone } = this.props;
    const token = localStorage.getItem('userToken');
    // redirect to home page
    if (requestDone && token !== null) {
      return <Redirect to="/" />;
    }

    return (
      <LoginForm
        handleSubmit={e => this.handleSubmit(e)}
        handleEmailChange={e => this.handleEmailChange(e)}
        handlePasswordChange={e => this.handlePasswordChange(e)}
        isRequest={isRequest}
        error={error}
      />
    );
  }
}

export default connect(mapStateToProps)(LoginContainer);
