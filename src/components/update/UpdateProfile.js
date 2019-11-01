import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';
import '../../content/form.css';
import TitleComponent from '../title/TitleComponent';

export default function UpdateProfile(props) {
  const {
    handleSubmit,
    handleNameChange,
    handleBirthDayChange,
    isRequest,
    error,
    user
  } = props;

  let button;
  if (isRequest) {
    button = (
      <Button variant="danger" type="submit" disabled>
        Cập nhật
      </Button>
    );
  } else {
    button = (
      <Button variant="danger" type="submit">
        Cập nhật
      </Button>
    );
  }

  let message;
  if (error !== undefined && error !== null) {
    message = (
      <Form.Group variant="danger">
        <Form.Label className="text-danger">{error.message}</Form.Label>
      </Form.Group>
    );
  } else {
    message = <></>;
  }

  return (
    <>
      <TitleComponent title="Cập nhật thông tin tài khoản" />
      <div className="form">
        <div className="text-center">
          <Image className="profile-img" src={user.photo} />
        </div>
        <div className="text-center">
          <Link className="btn text-primary" to="/update-profile/avartar">
            Đổi ảnh đại diện
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Địa chỉ email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={user.email}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập họ và tên"
              onChange={handleNameChange}
              value={user.name}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control
              type="date"
              placeholder="Nhập ngày sinh"
              onChange={handleBirthDayChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Mật khẩu</Form.Label>
            <div className="button_group">
              <Form.Control type="password" value="password" disabled />
              <Link
                className="btn btn-primary link"
                to="/update-profile/password"
              >
                Sửa
              </Link>
            </div>
          </Form.Group>
          {message}
          <div className="button_group">
            {button}
            <Link className="btn btn-success link" to="/">
              Thoát
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}
