import { loadState } from "../localStorage";

const localStorageState = loadState();
const initialState = localStorageState ? localStorageState.auth : {};

export function AuthReducer(state = initialState, action) {
  const token = action.payload;
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        loggedIn: true,
        token: token,
      }
    }
    case 'SIGN_OUT': {
      return {
        ...state,
        loggedIn: false,
        token: null,
      }
    }
    default: return state;
  }
}