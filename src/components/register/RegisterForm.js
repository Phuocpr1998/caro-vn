import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import logo from '../../content/logo.png';
import '../../content/form.css';
import TitleComponent from '../title/TitleComponent';

export default function RegisterForm(props) {
  const {
    handleSubmit,
    handleEmailChange,
    handleNameChange,
    handleBirthDayChange,
    handlePasswordChange,
    handleRePasswordChange,
    isRequest,
    error
  } = props;

  let button;
  if (isRequest) {
    button = (
      <Button variant="danger" type="submit" disabled>
        Đăng ký
      </Button>
    );
  } else {
    button = (
      <Button variant="danger" type="submit">
        Đăng ký
      </Button>
    );
  }

  let message;
  if (error !== undefined && error !== null) {
    message = (
      <Form.Group variant="danger">
        <Form.Label variant="danger">{error.err}</Form.Label>
      </Form.Group>
    );
  } else {
    message = <></>;
  }

  return (
    <>
      <TitleComponent title="Đăng ký tài khoản" />
      <div className="login_form">
        <div className="text-center">
          <Image src={logo} thumbnail />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Địa chỉ email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập họ và tên"
              onChange={handleNameChange}
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
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicRePassword">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập xác nhận mật khẩu"
              onChange={handleRePasswordChange}
              required
            />
          </Form.Group>
          {message}
          <div className="button_group">
            {button}
            <Button variant="success" type="button">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
