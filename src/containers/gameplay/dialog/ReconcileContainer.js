import React from 'react';
import { connect } from 'react-redux';
import {
  requestReconcile,
  requestReconcileTimeout,
  sendResponseReconcileAccept,
  sendResponseReconcileCancel
} from '../../../actions/socketAction';
import { reconcileCancel } from '../../../actions';
import Reconcile from '../../../components/gameplay/dialog/Reconcile';

const mapStateToProps = state => ({
  ...state.GameReducer,
  user: state.ProfileReducer.user
});

class ReconcileContainer extends React.Component {
  handleAccept() {
    const { dispatch, user, isReceiverRequestReconcile } = this.props;
    if (isReceiverRequestReconcile) {
      dispatch(requestReconcile(user));
      setTimeout(() => {
        const { isRequesting } = this.props;
        if (isRequesting) {
          dispatch(requestReconcileTimeout());
        }
      }, 15000);
    } else {
      dispatch(sendResponseReconcileAccept());
    }
  }

  handleCancel() {
    const { dispatch, isReceiverRequestReconcile } = this.props;
    if (isReceiverRequestReconcile) {
      dispatch(reconcileCancel());
    } else {
      dispatch(sendResponseReconcileCancel());
    }
  }

  render() {
    const {
      user,
      isRequestReconcile,
      isReceiverRequestReconcile,
      isRequesting
    } = this.props;
    return (
      <Reconcile
        show={isRequestReconcile || isReceiverRequestReconcile}
        user={user}
        isRequesting={isRequesting}
        isReceiverRequestReconcile={isReceiverRequestReconcile}
        handleAccept={() => this.handleAccept()}
        handleCancel={() => this.handleCancel()}
      />
    );
  }
}

export default connect(mapStateToProps)(ReconcileContainer);
