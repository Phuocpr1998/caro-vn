import React from 'react';
import { Card, ListGroup, Button, Image } from 'react-bootstrap';
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
          <div className="text-center">
            <Image className="profile-img" src={user.photo} />
          </div>
          <ListGroup variant="flush" className="mt-10">
            <ListGroup.Item>
              <h5>Chào mừng {user.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Ngày sinh: {user.birthday}</ListGroup.Item>
            <ListGroup.Item>Điểm số: {user.point}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="button_group">
          <Link className="mt-10 btn btn-primary" to="/update-profile">
            Cập nhật thông tin
          </Link>
          <Link className="btn btn-success" to="/play">
            Chơi Game
          </Link>
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
