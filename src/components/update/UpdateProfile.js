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
    handlePasswordChange,
    handleRePasswordChange,
    handleImageChange,
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicRePassword">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập xác nhận mật khẩu"
              onChange={handleRePasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Hình đại điện</Form.Label>
            <Form.Control
              type="file"
              placeholder="Nhập xác nhận mật khẩu"
              onChange={handleImageChange}
            />
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
