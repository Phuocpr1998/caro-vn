import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProfile, update } from '../../actions/actionFunction';
import {
  nameUpdateChange,
  birthdayUpdateChange,
  requestPostUpdateError
} from '../../actions/actionUpdate';
import UpdateProfile from '../../components/update/UpdateProfile';
import WaitingPage from '../../components/layout/WaitingPage';

const mapStateToProps = state => ({
  ...state.UpdateProfileReducer,
  errorGetProfile: state.ProfileReducer.error
});

class UpdateProfileContainer extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, userUpdate } = this.props;
    if (userUpdate.photo === null || userUpdate.photo === undefined) {
      dispatch(
        requestPostUpdateError({
          err: 'Vui lòng chọn hình đại diện.'
        })
      );
    } else if (userUpdate.password !== userUpdate.repassword) {
      dispatch(
        requestPostUpdateError({
          err: 'Xác nhận mật khẩu sai.'
        })
      );
    } else {
      dispatch(update(userUpdate));
    }
  }

  handleNameChange(e) {
    const { dispatch } = this.props;
    dispatch(nameUpdateChange(e.target.value));
  }

  handleBirthDayChange(e) {
    const { dispatch } = this.props;
    dispatch(birthdayUpdateChange(e.target.value));
  }

  render() {
    const { isRequest, error, userUpdate, errorGetProfile } = this.props;
    if (errorGetProfile) {
      return <Redirect to="/" />;
    }
    if (userUpdate === undefined || userUpdate === null) {
      return <WaitingPage />;
    }
    return (
      <UpdateProfile
        handleSubmit={e => this.handleSubmit(e)}
        handleNameChange={e => this.handleNameChange(e)}
        handleBirthDayChange={e => this.handleBirthDayChange(e)}
        handleImageChange={photo => this.handleImageChange(photo)}
        isRequest={isRequest}
        error={error}
        user={userUpdate}
      />
    );
  }
}

export default connect(mapStateToProps)(UpdateProfileContainer);
