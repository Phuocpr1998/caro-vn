import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';
import logo from '../../content/logo.png';
import '../../content/form.css';
import TitleComponent from '../title/TitleComponent';

export default function LoginForm(props) {
  const {
    handleSubmit,
    handlePasswordChange,
    handleEmailChange,
    isRequest,
    error
  } = props;

  let buttonLogin;
  if (isRequest) {
    buttonLogin = (
      <Button variant="primary" type="submit" disabled>
        Đăng nhập
      </Button>
    );
  } else {
    buttonLogin = (
      <Button variant="primary" type="submit">
        Đăng nhập
      </Button>
    );
  }

  let message;
  if (error !== undefined && error !== null) {
    message = (
      <Form.Group>
        <Form.Label>{error}</Form.Label>
      </Form.Group>
    );
  } else {
    message = <></>;
  }

  return (
    <>
      <TitleComponent title="Đăng nhập" />
      <div className="form">
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
          {message}
          <div className="button_group">
            {buttonLogin}
            <Button variant="danger" type="button">
              <Link className="link" to="/register">
                Đăng ký tài khoản
              </Link>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
