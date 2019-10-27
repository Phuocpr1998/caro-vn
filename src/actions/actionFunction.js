import fetch from 'cross-fetch';

import {
  requestPostLogin,
  requestPostLoginDone,
  requestPostLoginError,
  requestPostRegister,
  requestPostRegisterError,
  requestPostRegisterDone,
  requestGetProfileInfo,
  requestGetProfileInfoError,
  requestGetProfileInfoDone
} from './index';
import { HostAPI } from '../config';

export function login(user) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostLogin());
    fetch(`${HostAPI}/user/login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    }).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            dispatch(requestPostLoginError('Username or password incorrect'));
          }
        } else {
          response.json().then(json => dispatch(requestPostLoginDone(json)));
        }
      },
      error => dispatch(requestPostLoginError(error))
    );
  };
}

export function register(user) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostRegister());
    fetch(`${HostAPI}/user/register`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
        birthday: user.birthday
      })
    }).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            response
              .json()
              .then(err => dispatch(requestPostRegisterError(err)));
          } else {
            dispatch(requestPostRegister());
          }
        } else {
          response.json().then(json => dispatch(requestPostRegisterDone(json)));
        }
      },
      error => dispatch(requestPostRegisterError(error))
    );
  };
}

export function getProfile() {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    // eslint-disable-next-line func-names
    return function(dispatch) {
      dispatch(requestGetProfileInfoError('Token not found'));
    };
  }
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestGetProfileInfo());
    fetch(`${HostAPI}/me`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            response
              .json()
              .then(err => dispatch(requestGetProfileInfoError(err)));
          } else {
            dispatch(requestGetProfileInfo());
          }
        } else {
          response
            .json()
            .then(json => dispatch(requestGetProfileInfoDone(json)));
        }
      },
      error => dispatch(requestGetProfileInfoError(error))
    );
  };
}
