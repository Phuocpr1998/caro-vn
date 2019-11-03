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
    const { dispatch, user, isRequestReconcile } = this.props;
    if (isRequestReconcile) {
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
    const { dispatch, isRequestReconcile } = this.props;
    if (isRequestReconcile) {
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
