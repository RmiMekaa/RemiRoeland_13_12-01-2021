const initialState = {
  loggedIn: false,
  token: null,
  rememberMe: false,
  error: null,
  loading: false,
};

/**
 * Auth Reducer
 * @param {object} state
 * @param {object} action
 */
export function AuthReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN_INIT': {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        rememberMe: action.payload.rememberMe,
        loading: false,
      }
    }
    case 'LOGIN_FAILED': {
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        loading: false
      }
    }
    case 'DISCONNECT': return initialState;
    default: return state;
  }
}