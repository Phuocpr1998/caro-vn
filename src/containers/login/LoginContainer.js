import React from 'react';
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
    return (
      <LoginForm
        handleSubmit={e => this.handleSubmit(e)}
        handleEmailChange={e => this.handleEmailChange(e)}
        handlePasswordChange={e => this.handlePasswordChange(e)}
      />
    );
  }
}

export default connect(mapStateToProps)(LoginContainer);
