import React from 'react';
import { connect } from 'react-redux';
import { changeMovePermission } from '../../../actions';
import MovePermission from '../../../components/gameplay/dialog/MovePermission';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class MovePermissionContainer extends React.Component {
  handleClose() {
    const { dispatch } = this.props;
    dispatch(changeMovePermission());
  }

  render() {
    const { notPermissionMove } = this.props;
    return (
      <MovePermission
        show={notPermissionMove}
        handleClose={() => this.handleClose()}
      />
    );
  }
}

export default connect(mapStateToProps)(MovePermissionContainer);
