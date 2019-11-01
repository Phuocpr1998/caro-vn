const UpdateProfileReducer = (
  state = {
    userUpdate: null,
    error: null,
    isRequest: false,
    requestDone: false
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_USER_CHANGE':
      return {
        ...state,
        userUpdate: action.userUpdate
      };
    case 'UPDATE_EMAIL_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          email: action.email
        }
      };
    case 'UPDATE_PASSWORD_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          password: action.password
        }
      };
    case 'UPDATE_REPASSWORD_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          repassword: action.repassword
        }
      };
    case 'UPDATE_BIRTHDAY_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          birthday: action.birthday
        }
      };
    case 'UPDATE_IMAGE_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          photo: action.image
        }
      };
    case 'UPDATE_NAME_CHANGE':
      return {
        ...state,
        userUpdate: {
          ...state.userUpdate,
          name: action.name
        }
      };
    case 'REQUEST_UPDATE':
      return {
        ...state,
        isRequest: true,
        requestDone: false
      };
    case 'REQUEST_UPDATE_DONE':
      return {
        ...state,
        isRequest: false,
        error: null,
        requestDone: true,
        userUpdate: null,
        user: null
      };
    case 'REQUEST_UPDATE_FAIL':
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

export default UpdateProfileReducer;
