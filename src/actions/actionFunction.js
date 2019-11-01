import fetch from 'cross-fetch';

import {
  requestGetProfileInfo,
  requestGetProfileInfoError,
  requestGetProfileInfoDone
} from './actionProfile';
import {
  requestPostRegister,
  requestPostRegisterError,
  requestPostRegisterDone
} from './actionRegister';
import {
  requestPostLogin,
  requestPostLoginDone,
  requestPostLoginError
} from './actionLogin';
import {
  requestPostUpdateError,
  requestPostUpdate,
  requestPostUpdateDone,
  userUpdateChange
} from './actionUpdate';
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
            dispatch(
              requestPostLoginError('Thông tin đăng nhập không chính xác')
            );
          }
        } else {
          response.json().then(json => dispatch(requestPostLoginDone(json)));
        }
      },
      () => dispatch(requestPostLoginError('Đã có lỗi xảy ra'))
    );
  };
}

const axios = require('axios');

export function register(user) {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostRegister());
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
    };
    const formData = new FormData();
    formData.append('photo', user.photo);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('name', user.name);
    formData.append('birthday', user.birthday);
    axios.post(`${HostAPI}/user/register`, formData, config).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            dispatch(requestPostRegisterError(response.data));
          } else {
            dispatch(requestPostRegister());
          }
        } else if (response.data.err) {
          dispatch(requestPostRegisterError(response.data));
        } else {
          dispatch(requestPostRegisterDone());
        }
      },
      () =>
        dispatch(
          requestPostRegisterError({
            err: 'Đã có lỗi xảy ra trong quá trình đăng ký.'
          })
        )
    );
  };
}

export function update(user) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    // eslint-disable-next-line func-names
    return function(dispatch) {
      dispatch(requestPostUpdateError('Token not found'));
    };
  }
  // eslint-disable-next-line func-names
  return function(dispatch) {
    dispatch(requestPostUpdate());
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('name', user.name);
    formData.append('birthday', user.birthday);
    axios.post(`${HostAPI}/user/update`, formData, config).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            dispatch(requestPostUpdateError(response.data));
          } else {
            dispatch(requestPostUpdate());
          }
        } else if (response.data.err) {
          dispatch(requestPostUpdateError(response.data));
        } else {
          dispatch(requestPostUpdateDone());
        }
      },
      () =>
        dispatch(
          requestPostRegisterError({
            err: 'Đã có lỗi xảy ra trong quá trình đăng ký.'
          })
        )
    );
  };
}

export function getProfile(fc) {
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
          response.json().then(json => {
            if (fc === 'update') {
              dispatch(userUpdateChange(json));
            } else {
              dispatch(requestGetProfileInfoDone(json));
            }
          });
        }
      },
      error => dispatch(requestGetProfileInfoError(error))
    );
  };
}
