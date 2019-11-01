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
