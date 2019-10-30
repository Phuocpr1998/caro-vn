import React from 'react';
import { connect } from 'react-redux';
import { handleMesageFormSubmit, messageChatChange } from '../../actions';
import ControlButton from '../../components/gameplay/ControlButton';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class ControlButtonContainer extends React.Component {
  handleGiveUp() {
    const { dispatch } = this.props;
    dispatch(handleMesageFormSubmit());
  }

  handleUndo() {
    const { dispatch } = this.props;
    dispatch(messageChatChange());
  }

  render() {
    return (
      <ControlButton
        handleUndo={() => this.handleUndo()}
        handleGiveUp={() => this.handleGiveUp()}
      />
    );
  }
}

export default connect(mapStateToProps)(ControlButtonContainer);
