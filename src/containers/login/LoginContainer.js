import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../../components/login/LoginForm';
import { emailLoginChange, passwordLoginChange } from '../../actions';
import { login } from '../../actions/actionFunction';

const mapStateToProps = state => ({
  ...state.LoginReducer
});

class LoginContainer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, user } = this.props;
    dispatch(login(user));
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
    const { isRequest, error, requestDone, token } = this.props;

    // redirect to home page
    if (requestDone) {
      localStorage.setItem('userToken', token);
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
