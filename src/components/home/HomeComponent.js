import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../content/form.css';
import TitleComponent from '../title/TitleComponent';

export default function HomeComponent(props) {
  const { user, handleButtonLogout } = props;
  return (
    <>
      <TitleComponent title="Trang chủ - Game Caro Việt Nam" />
      <Card border="light" className="form">
        <Card.Body>
          <Card.Title>Chào mừng {user.name}</Card.Title>
          <ListGroup variant="flush" className="mt-10">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Ngày sinh: {user.birthday}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="button_group">
          <Card.Link className="mt-10">
            <Button variant="success">
              <Link className="link" to="/play">
                Chơi Game
              </Link>
            </Button>
          </Card.Link>
          <Card.Link className="mt-10">
            <Button onClick={handleButtonLogout} variant="danger">
              Đăng xuất
            </Button>
          </Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
}
