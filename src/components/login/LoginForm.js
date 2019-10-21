import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import logo from '../../content/logo.png';
import TitleComponent from '../title/TitleComponent';

export default function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <>
      <TitleComponent title="Đăng nhập" />
      <div className="text-center">
        <Image src={logo} thumbnail />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Địa chỉ </Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nhớ đăng nhập" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </>
  );
}
