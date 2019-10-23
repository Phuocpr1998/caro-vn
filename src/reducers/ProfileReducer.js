const ProfileReducer = (
  state = {
    user: null,
    isRequest: false,
    error: null,
    requestDone: false,
    logout: false,
    playgame: false
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
    case 'PROFILE_PLAYGAME':
      return {
        ...state,
        playgame: true
      };
    case 'PROFILE_LOGOUT':
      return {
        ...state,
        logout: true
      };
    default:
      return state;
  }
};

export default ProfileReducer;
