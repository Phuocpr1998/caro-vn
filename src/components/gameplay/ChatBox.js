/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';

import '../../content/scrollbar.css';
import '../../content/Game.css';

function getItemMessage(index, message) {
  if (message.people !== undefined && message.people !== null) {
    return (
      <ul className="message-item-1">
        <li key={index} className="message-item">
          <Image
            className="message-item-img"
            src={message.people.photo}
            width="30px"
            height="30px"
          />
          <span className="message-1">{message.value}</span>
        </li>
      </ul>
    );
  }
  return (
    <ul className="message-item-0">
      <li key={index} className="message-item">
        <span className="message-0">{message.value}</span>
      </li>
    </ul>
  );
}

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
          {messages.map((value, index) => getItemMessage(index, value))}
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
