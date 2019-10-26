import React from 'react';
import { Redirect } from 'react-router-dom';

function AccountContainer(props) {
  const { token } = props;
  if (token !== null && token !== undefined && token !== '') {
    localStorage.setItem('userToken', token);
    return <Redirect to="/" />;
  }
  return <Redirect to="/login" />;
}

export default AccountContainer;
