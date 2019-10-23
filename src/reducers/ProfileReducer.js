const ProfileReducer = (
  state = {
    user: {
      name: '',
      birthday: '',
      email: ''
    },
    isRequest: false,
    error: null,
    requestDone: false
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_GET_PROFILE':
      return {
        ...state,
        error: null,
        requestDone: false,
        isRequest: true
      };
    case 'REQUEST_GET_PROFILE_DONE':
      return {
        ...state,
        error: null,
        requestDone: true,
        user: action.user,
        isRequest: false
      };
    case 'REQUEST_GET_PROFILE_FAIL':
      return {
        ...state,
        error: action.error,
        requestDone: false,
        isRequest: false
      };
    default:
      return state;
  }
};

export default ProfileReducer;
