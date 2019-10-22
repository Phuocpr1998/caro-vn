const LoginReducer = (
  state = {
    user: {
      email: '',
      password: ''
    }
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_USERNAME_CHANGE':
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
    default:
      return state;
  }
};

export default LoginReducer;
