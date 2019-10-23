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
import HostAPI from '../contains';

export function login(user) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostLogin());
    return fetch(`${HostAPI}/user/login`, {
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
      response =>
        response.status !== 200
          ? dispatch(requestPostLoginError('Username or password incorrect'))
          : response.json().then(json => dispatch(requestPostLoginDone(json))),
      error => dispatch(requestPostLoginError(error))
    );
  };
}

export function register(user) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostRegister());
    return fetch(`${HostAPI}/user/register`, {
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
      response =>
        response.status !== 200
          ? response.json().then(err => dispatch(requestPostRegisterError(err)))
          : response
              .json()
              .then(json => dispatch(requestPostRegisterDone(json))),
      error => dispatch(requestPostRegisterError(error))
    );
  };
}

export function getProfile(token) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestGetProfileInfo());
    return fetch(`${HostAPI}/me`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(
      response =>
        response.status !== 200
          ? response
              .json()
              .then(err => dispatch(requestGetProfileInfoError(err)))
          : response
              .json()
              .then(json => dispatch(requestGetProfileInfoDone(json))),
      error => dispatch(requestGetProfileInfoError(error))
    );
  };
}
