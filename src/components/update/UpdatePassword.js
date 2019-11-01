import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../content/form.css';
import TitleComponent from '../title/TitleComponent';

function UpdatePassword(props) {
  const {
    handleSubmit,
    handlePasswordChange,
    handleRePasswordChange,
    user,
    isRequest,
    error
  } = props;

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

  let button;
  if (isRequest) {
    button = (
      <Button variant="primary" onClick={handleSubmit} disabled>
        Cập nhật
      </Button>
    );
  } else {
    button = (
      <Button variant="primary" onClick={handleSubmit}>
        Cập nhật
      </Button>
    );
  }

  return (
    <>
      <TitleComponent title="Cập nhật mật khẩu" />
      <div className="form">
        <div className="text-center">
          <Image className="profile-img" src={user.photo} />
        </div>
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
        {message}
        <div className="button_group">
          {button}
          <Link className="btn btn-success link" to="/update-profile">
            Thoát
          </Link>
        </div>
      </div>
    </>
  );
}
export default UpdatePassword;
