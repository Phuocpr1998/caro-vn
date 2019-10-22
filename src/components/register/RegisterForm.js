import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import logo from '../../content/logo.png';
import TitleComponent from '../title/TitleComponent';

export default function RegisterForm(props) {
  const {
    handleSubmit,
    handleEmailChange,
    handleNameChange,
    handleBirthDateChange,
    handlePasswordChange,
    handleRePasswordChange
  } = props;
  return (
    <>
      <TitleComponent title="Đăng ký tài khoản" />
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
        <Form.Group controlId="formBasicName">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập họ và tên"
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Ngày sinh</Form.Label>
          <Form.Control
            type="date"
            placeholder="Nhập ngày sinh"
            onChange={handleBirthDateChange}
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
        <Button variant="danger" type="submit">
          Đăng ký
        </Button>
      </Form>
    </>
  );
}
