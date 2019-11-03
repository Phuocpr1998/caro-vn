import React from 'react';
import { connect } from 'react-redux';
import { giveUp, messageChatChange, resetGame, reconcile } from '../../actions';
import ControlButton from '../../components/gameplay/ControlButton';
import { resetProfile } from '../../actions/actionProfile';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class ControlButtonContainer extends React.Component {
  handleGiveUp() {
    const { dispatch } = this.props;
    dispatch(giveUp());
  }

  handleReconcile() {
    const { dispatch } = this.props;
    dispatch(reconcile());
  }

  handleUndo() {
    const { dispatch } = this.props;
    dispatch(messageChatChange());
  }

  handleExit() {
    const { dispatch } = this.props;
    dispatch(resetProfile());
    dispatch(resetGame());
  }

  render() {
    const { playType } = this.props;
    return (
      <ControlButton
        handleUndo={() => this.handleUndo()}
        handleGiveUp={() => this.handleGiveUp()}
        handleReconcile={() => this.handleReconcile()}
        handleExit={() => this.handleExit()}
        playType={playType}
      />
    );
  }
}

export default connect(mapStateToProps)(ControlButtonContainer);
