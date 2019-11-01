export const emailLoginChange = email => ({
  type: 'LOGIN_EMAIL_CHANGE',
  email
});

export const passwordLoginChange = password => ({
  type: 'LOGIN_PASSWORD_CHANGE',
  password
});

export const requestPostLogin = () => ({
  type: 'REQUEST_LOGIN'
});

export const requestPostLoginDone = tokenInfo => ({
  type: 'REQUEST_LOGIN_DONE',
  tokenInfo
});

export const requestPostLoginError = error => ({
  type: 'REQUEST_LOGIN_FAIL',
  error
});
