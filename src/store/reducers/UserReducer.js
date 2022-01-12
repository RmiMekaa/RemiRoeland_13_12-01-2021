import { loadState } from "../localStorage";

const localStorageState = loadState();
const initialState = localStorageState ? localStorageState.user : {};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_NAME': {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    }
    case 'GET_USER_PROFILE': {
      return action.payload
    }
    default: return state;
  }
}