import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  passwordUpdateChange,
  rePasswordUpdateChange
} from '../../actions/actionUpdate';
import { updatePasswordOfUser, getProfile } from '../../actions/actionFunction';
import UpdatePassword from '../../components/update/UpdatePassword';
import WaitingPage from '../../components/layout/WaitingPage';

const mapStateToProps = state => ({
  ...state.UpdateProfileReducer
});

class UpdatePasswordContainer extends React.Component {
  componentDidMount() {
    const { dispatch, isRequest, userUpdate } = this.props;
    if ((userUpdate === null || userUpdate === undefined) && !isRequest) {
      dispatch(getProfile('update'));
    }
  }

  componentDidUpdate() {
    const { dispatch, isRequest, userUpdate } = this.props;
    if ((userUpdate === null || userUpdate === undefined) && !isRequest) {
      dispatch(getProfile('update'));
    }
  }

  handlePasswordChange(e) {
    const { dispatch } = this.props;
    dispatch(passwordUpdateChange(e.target.value));
  }

  handleRePasswordChange(e) {
    const { dispatch } = this.props;
    dispatch(rePasswordUpdateChange(e.target.value));
  }

  handleSubmit() {
    const { dispatch, userUpdate } = this.props;
    dispatch(updatePasswordOfUser(userUpdate));
  }

  render() {
    const { error, userUpdate, errorGetProfile, isRequest } = this.props;
    if (errorGetProfile) {
      return <Redirect to="/update-profile" />;
    }
    if (userUpdate === undefined || userUpdate === null) {
      return <WaitingPage />;
    }

    return (
      <UpdatePassword
        isRequest={isRequest}
        handlePasswordChange={e => this.handlePasswordChange(e)}
        handleRePasswordChange={e => this.handleRePasswordChange(e)}
        handleSubmit={() => this.handleSubmit()}
        user={userUpdate}
        error={error}
      />
    );
  }
}

export default connect(mapStateToProps)(UpdatePasswordContainer);
