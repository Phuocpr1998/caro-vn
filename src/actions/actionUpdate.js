export const emailUpdateChange = email => ({
  type: 'UPDATE_EMAIL_CHANGE',
  email
});

export const passwordUpdateChange = password => ({
  type: 'UPDATE_PASSWORD_CHANGE',
  password
});

export const nameUpdateChange = name => ({
  type: 'UPDATE_NAME_CHANGE',
  name
});

export const rePasswordUpdateChange = repassword => ({
  type: 'UPDATE_REPASSWORD_CHANGE',
  repassword
});

export const birthdayUpdateChange = birthday => ({
  type: 'UPDATE_BIRTHDAY_CHANGE',
  birthday
});

export const requestPostUpdate = () => ({
  type: 'REQUEST_UPDATE'
});

export const requestPostUpdateDone = () => ({
  type: 'REQUEST_UPDATE_DONE'
});

export const requestPostUpdateError = error => ({
  type: 'REQUEST_UPDATE_FAIL',
  error
});

export const userUpdateChange = userUpdate => ({
  type: 'UPDATE_USER_CHANGE',
  userUpdate
});
