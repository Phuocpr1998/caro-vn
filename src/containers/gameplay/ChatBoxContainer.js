import React from 'react';
import { connect } from 'react-redux';
import { handleMesageFormSubmit, messageChatChange } from '../../actions';
import ChatBox from '../../components/gameplay/ChatBox';

const mapStateToProps = state => ({
  ...state.GameReducer
});

class ChatBoxContainer extends React.Component {
  handleMesageFormSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleMesageFormSubmit());
  }

  handleMessageChange(e) {
    const { dispatch } = this.props;
    dispatch(messageChatChange(e.target.value));
  }

  render() {
    const { messages, messageChat, playType } = this.props;
    if (playType === 2) {
      // play with machine
      return <></>;
    }
    return (
      <ChatBox
        messages={messages}
        messageChat={messageChat}
        handleMesageFormSubmit={e => this.handleMesageFormSubmit(e)}
        handleMessageChange={e => this.handleMessageChange(e)}
      />
    );
  }
}

export default connect(mapStateToProps)(ChatBoxContainer);
