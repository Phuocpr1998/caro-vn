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
        isRequest: true,
        logout: false
      };
    case 'RESET_PROFILE':
      return {
        user: null,
        isRequest: false,
        error: null,
        requestDone: false,
        logout: false,
        playgame: false
      };
    case 'REQUEST_GET_PROFILE_DONE':
      return {
        ...state,
        error: null,
        requestDone: true,
        user: {
          ...action.user,
          birthday:
            action.user.birthday !== null && action.user.birthday !== undefined
              ? action.user.birthday.slice(0, 10)
              : null
        },
        isRequest: false,
        logout: false
      };
    case 'REQUEST_GET_PROFILE_FAIL':
      return {
        ...state,
        error: action.error,
        requestDone: false,
        isRequest: false,
        logout: false
      };
    case 'PROFILE_LOGOUT':
      return {
        ...state,
        logout: true,
        error: null,
        requestDone: false,
        isRequest: false,
        user: null
      };
    case 'PROFILE_LOGOUT_DONE':
      return {
        ...state,
        logout: true,
        error: null,
        requestDone: false,
        isRequest: false,
        user: null
      };
    default:
      return state;
  }
};

export default ProfileReducer;
