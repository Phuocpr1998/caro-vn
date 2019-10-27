import React from 'react';
import { connect } from 'react-redux';
import { handleMesageFormSubmit, messageChatChange } from '../../actions';
import ChatBox from '../../components/gameplay/ChatBox';

const mapStateToProps = state => ({
  ...state.BoardReducer
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
    const { messages, messageChat } = this.props;
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
