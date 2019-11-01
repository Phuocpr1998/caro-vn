export const requestLogout = () => ({
  type: 'PROFILE_LOGOUT'
});

export const requestLogoutDone = () => ({
  type: 'PROFILE_LOGOUT_DONE'
});

export const requestGetProfileInfo = () => ({
  type: 'REQUEST_GET_PROFILE'
});

export const requestGetProfileInfoDone = user => ({
  type: 'REQUEST_GET_PROFILE_DONE',
  user
});

export const requestGetProfileInfoError = error => ({
  type: 'REQUEST_GET_PROFILE_FAIL',
  error
});

export const updateAvarter = () => ({
  type: 'REQUEST_UPDATE_AVARTAR'
});

export const updatePassword = () => ({
  type: 'REQUEST_UPDATE_PASSWORD'
});

export const requestUpdateAvarterError = error => ({
  type: 'REQUEST_UPDATE_AVARTAR_ERROR',
  error
});

export const requestUpdatePasswordError = error => ({
  type: 'REQUEST_UPDATE_PASSWORD_ERROR',
  error
});
