import React from 'react';
import { connect } from 'react-redux';
import { giveUp, messageChatChange, resetGame } from '../../actions';
import ControlButton from '../../components/gameplay/ControlButton';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class ControlButtonContainer extends React.Component {
  handleGiveUp() {
    const { dispatch } = this.props;
    dispatch(giveUp());
  }

  handleUndo() {
    const { dispatch } = this.props;
    dispatch(messageChatChange());
  }

  handleExit() {
    const { dispatch } = this.props;
    dispatch(resetGame());
  }

  render() {
    const { playType } = this.props;
    return (
      <ControlButton
        handleUndo={() => this.handleUndo()}
        handleGiveUp={() => this.handleGiveUp()}
        handleExit={() => this.handleExit()}
        playType={playType}
      />
    );
  }
}

export default connect(mapStateToProps)(ControlButtonContainer);
