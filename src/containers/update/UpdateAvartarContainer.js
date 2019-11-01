import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProfile, updateAvartar } from '../../actions/actionFunction';
import WaitingPage from '../../components/layout/WaitingPage';
import UpdateAvartar from '../../components/update/UpdateAvartar';

const mapStateToProps = state => ({
  ...state.UpdateProfileReducer
});

class UpdateAvartarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

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

  handleImageChange(photo) {
    this.setState({
      photo: photo.target.files[0]
    });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { photo } = this.state;
    dispatch(
      updateAvartar({
        photo
      })
    );
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
      <UpdateAvartar
        isRequest={isRequest}
        handleImageChange={e => this.handleImageChange(e)}
        handleSubmit={() => this.handleSubmit()}
        user={userUpdate}
        error={error}
      />
    );
  }
}

export default connect(mapStateToProps)(UpdateAvartarContainer);
