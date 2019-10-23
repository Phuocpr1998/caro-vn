import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TitleComponent from '../title/TitleComponent';

export default function HomeComponent(props) {
  const { user, handlePlayGame, handleLogout } = props;
  return (
    <>
      <TitleComponent title="Trang chủ - Game Caro Việt Nam" />
      <Card border="light" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Chào mừng {user.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Ngày sinh: {user.birthday}</ListGroup.Item>
          </ListGroup>
          <Card.Link onClick={handlePlayGame}>Chơi Game</Card.Link>
          <Card.Link onClick={handleLogout}>Đăng xuất</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
