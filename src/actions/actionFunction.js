import fetch from 'cross-fetch';

import {
  requestGetProfileInfo,
  requestGetProfileInfoError,
  requestGetProfileInfoDone,
  requestUpdatePasswordError,
  requestUpdateAvarterError
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
  return dispatch => {
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
  return dispatch => {
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
            message: 'Đã có lỗi xảy ra trong quá trình đăng ký.'
          })
        )
    );
  };
}

export function getProfile(fc) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    return dispatch => {
      dispatch(requestGetProfileInfoError('Token not found'));
    };
  }
  return dispatch => {
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

export function update(user) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    return dispatch => {
      dispatch(requestPostUpdateError('Token not found'));
    };
  }
  return dispatch => {
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
          requestPostUpdateError({
            message: 'Đã có lỗi xảy ra trong quá trình cập nhật.'
          })
        )
    );
  };
}

export function updatePasswordOfUser(user) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    return dispatch => {
      dispatch(requestUpdatePasswordError('Token not found'));
    };
  }
  return dispatch => {
    dispatch(requestPostUpdate());
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    const formData = new FormData();
    formData.append('password', user.password);
    axios.post(`${HostAPI}/user/update-password`, formData, config).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            dispatch(requestUpdatePasswordError(response.data));
          } else {
            dispatch(requestPostUpdate());
          }
        } else if (response.data.err) {
          dispatch(requestUpdatePasswordError(response.data));
        } else {
          dispatch(requestPostUpdateDone());
        }
      },
      () =>
        dispatch(
          requestUpdatePasswordError({
            message: 'Đã có lỗi xảy ra trong quá trình cập nhật.'
          })
        )
    );
  };
}

export function updatePointOfUser(socketID) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    return () => {
      console.log('UpdatePointOfUser: Token not found');
    };
  }
  return () => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    const formData = new FormData();
    formData.append('socketID', socketID);
    axios.post(`${HostAPI}/user/update-point`, formData, config).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            console.log(`UpdatePointOfUser: ${response.data}`);
          } else {
            console.log(`UpdatePointOfUser: ${response.data}`);
          }
        } else if (response.data.err) {
          console.log(`UpdatePointOfUser: ${response.data}`);
        } else {
          console.log(`UpdatePointOfUser: Done`);
        }
      },
      () => {
        console.log(`UpdatePointOfUser: Failed`);
      }
    );
  };
}

export function updateAvartar(user) {
  const token = localStorage.getItem('userToken');
  if (token === null) {
    return dispatch => {
      dispatch(requestUpdateAvarterError('Token not found'));
    };
  }
  return dispatch => {
    dispatch(requestPostUpdate());
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    const formData = new FormData();
    formData.append('photo', user.photo);
    axios.post(`${HostAPI}/user/update-photo`, formData, config).then(
      response => {
        if (response.status !== 200) {
          if (response.status !== 204) {
            dispatch(requestUpdateAvarterError(response.data));
          } else {
            dispatch(requestPostUpdate());
          }
        } else if (response.data.err) {
          dispatch(requestUpdateAvarterError(response.data));
        } else {
          dispatch(requestPostUpdateDone());
          dispatch(getProfile());
        }
      },
      () =>
        dispatch(
          requestUpdatePasswordError({
            err: 'Đã có lỗi xảy ra trong quá trình cập nhật.'
          })
        )
    );
  };
}
