const LoginReducer = (
  state = {
    user: {
      email: '',
      password: ''
    },
    isRequest: false,
    error: null,
    requestDone: false
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_EMAIL_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
    case 'LOGIN_PASSWORD_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password
        }
      };
    case 'REQUEST_LOGIN':
      return {
        ...state,
        isRequest: true,
        error: null,
        requestDone: false
      };
    case 'REQUEST_LOGIN_DONE':
      localStorage.setItem('userToken', action.tokenInfo.token);
      return {
        ...state,
        isRequest: false,
        error: null,
        requestDone: true
      };
    case 'REQUEST_LOGIN_FAIL':
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

export default LoginReducer;
