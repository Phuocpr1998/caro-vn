import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RegisterForm from '../../components/register/RegisterForm';
import { register } from '../../actions/actionFunction';
import {
  emailRegisterChange,
  passwordRegisterChange,
  rePasswordRegisterChange,
  nameRegisterChange,
  birthdayRegisterChange,
  requestPostRegisterError
} from '../../actions';

const mapStateToProps = state => ({
  ...state.RegisterReducer
});

class RegisterContainer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, user } = this.props;
    if (user.password !== user.repassword) {
      dispatch(
        requestPostRegisterError({
          err: 'Password and Repassword is not the same'
        })
      );
    } else {
      dispatch(register(user));
    }
  }

  handleEmailChange(e) {
    const { dispatch } = this.props;
    dispatch(emailRegisterChange(e.target.value));
  }

  handlePasswordChange(e) {
    const { dispatch } = this.props;
    dispatch(passwordRegisterChange(e.target.value));
  }

  handleRePasswordChange(e) {
    const { dispatch } = this.props;
    dispatch(rePasswordRegisterChange(e.target.value));
  }

  handleNameChange(e) {
    const { dispatch } = this.props;
    dispatch(nameRegisterChange(e.target.value));
  }

  handleBirthDayChange(e) {
    const { dispatch } = this.props;
    dispatch(birthdayRegisterChange(e.target.value));
  }

  render() {
    const { isRequest, error, requestDone } = this.props;
    // redirect to login page
    if (requestDone) {
      return <Redirect to="/login" />;
    }

    return (
      <RegisterForm
        handleSubmit={e => this.handleSubmit(e)}
        handleEmailChange={e => this.handleEmailChange(e)}
        handlePasswordChange={e => this.handlePasswordChange(e)}
        handleRePasswordChange={e => this.handleRePasswordChange(e)}
        handleNameChange={e => this.handleNameChange(e)}
        handleBirthDayChange={e => this.handleBirthDayChange(e)}
        isRequest={isRequest}
        error={error}
        requestDone={requestDone}
      />
    );
  }
}

export default connect(mapStateToProps)(RegisterContainer);
