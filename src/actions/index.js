/* eslint-disable import/prefer-default-export */
export const resetGame = () => ({
  type: 'RESET_GAME'
});

export const handleOnBoardClick = (i, j) => ({
  type: 'ON_BOARD_CLICK',
  i,
  j
});

export const handleOnHistoryClick = index => ({
  type: 'ON_HISTORY_CLICK',
  index
});

export const handleOnButtonSortClick = () => ({
  type: 'SORT_HISTORY'
});

export const handleMesageFormSubmit = () => ({
  type: 'MESSAGE_SEND'
});

export const messageChatChange = message => ({
  type: 'MESSAGE_CHANGE',
  message
});

export const emailLoginChange = email => ({
  type: 'LOGIN_EMAIL_CHANGE',
  email
});

export const passwordLoginChange = password => ({
  type: 'LOGIN_PASSWORD_CHANGE',
  password
});

export const emailRegisterChange = email => ({
  type: 'REGISTER_EMAIL_CHANGE',
  email
});

export const passwordRegisterChange = password => ({
  type: 'REGISTER_PASSWORD_CHANGE',
  password
});

export const nameRegisterChange = name => ({
  type: 'REGISTER_NAME_CHANGE',
  name
});

export const rePasswordRegisterChange = repassword => ({
  type: 'REGISTER_REPASSWORD_CHANGE',
  repassword
});

export const birthdayRegisterChange = birthday => ({
  type: 'REGISTER_BIRTHDAY_CHANGE',
  birthday
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

export const requestPostRegister = () => ({
  type: 'REQUEST_REGISTER'
});

export const requestPostRegisterDone = user => ({
  type: 'REQUEST_REGISTER_DONE',
  user
});

export const requestPostRegisterError = error => ({
  type: 'REQUEST_REGISTER_FAIL',
  error
});

export const requestPlayGame = () => ({
  type: 'PROFILE_PLAYGAME'
});

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
