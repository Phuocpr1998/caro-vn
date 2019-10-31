const RegisterReducer = (
  state = {
    user: {
      email: '',
      password: '',
      repassword: '',
      name: '',
      birthday: '',
      photo: null
    },
    error: null,
    isRequest: false,
    requestDone: false
  },
  action
) => {
  switch (action.type) {
    case 'REGISTER_EMAIL_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
    case 'REGISTER_PASSWORD_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password
        }
      };
    case 'REGISTER_REPASSWORD_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          repassword: action.repassword
        }
      };
    case 'REGISTER_BIRTHDAY_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          birthday: action.birthday
        }
      };
    case 'REGISTER_IMAGE_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          photo: action.image
        }
      };
    case 'REGISTER_NAME_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name
        }
      };
    case 'REQUEST_REGISTER':
      return {
        ...state,
        isRequest: true,
        requestDone: false
      };
    case 'REQUEST_REGISTER_DONE':
      return {
        ...state,
        isRequest: false,
        error: null,
        requestDone: true
      };
    case 'REQUEST_REGISTER_FAIL':
      return {
        ...state,
        isRequest: false,
        error: action.error,
        requestDone: false
      };
    default:
      return state;
  }
};

export default RegisterReducer;
