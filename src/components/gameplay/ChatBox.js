/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Form, Button } from 'react-bootstrap';

import '../../content/scrollbar.css';

function ChatBox({
  messages,
  handleMesageFormSubmit,
  handleMessageChange,
  messageChat
}) {
  return (
    <>
      <div className="game-message-chat">
        <div className="title">
          <h5>Nhắn tin cho đối thủ</h5>
        </div>
        <div className="message-content scrollbar scrollbar-primary">
          <ul>
            {messages.map((value, index) => (
              <li key={index}>{value.value}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Form className="message-input" onSubmit={handleMesageFormSubmit}>
          <Form.Control
            type="text"
            placeholder="Nhập tin nhắn"
            value={messageChat}
            onChange={handleMessageChange}
          />
          <Button type="submit" className="button-send">
            Gửi
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ChatBox;
