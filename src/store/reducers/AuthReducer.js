const initialState = {
  loggedIn: false,
  token: undefined,
  rememberMe: false,
  error: false,
  loading: false,
};

/**
 * Auth Reducer
 * @param {object} state
 * @param {object} action
 */
export function AuthReducer(state = initialState, action) {
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
    default: return state;
  }
}

//Actions types
const LOGIN_INIT = 'LOGIN_INIT';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

//Action Creators
export const LoginInitAction = () => ({ type: LOGIN_INIT });
export const LoginSuccessAction = (payload) => ({ type: LOGIN_SUCCESS, payload: payload });
export const LoginFailedAction = (payload) => ({ type: LOGIN_FAILED, payload });