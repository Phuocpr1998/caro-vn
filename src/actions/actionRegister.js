export const requestPostRegister = () => ({
  type: 'REQUEST_REGISTER'
});

export const requestPostRegisterDone = () => ({
  type: 'REQUEST_REGISTER_DONE'
});

export const requestPostRegisterError = error => ({
  type: 'REQUEST_REGISTER_FAIL',
  error
});

export const emailRegisterChange = email => ({
  type: 'REGISTER_EMAIL_CHANGE',
  email
});

export const imageRegisterChange = image => ({
  type: 'REGISTER_IMAGE_CHANGE',
  image
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
