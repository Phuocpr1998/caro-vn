const RegisterReducer = (
  state = {
    user: {
      email: '',
      password: '',
      repassword: '',
      name: '',
      birthday: ''
    }
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
    case 'REGISTER_NAME_CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name
        }
      };
    default:
      return state;
  }
};

export default RegisterReducer;
