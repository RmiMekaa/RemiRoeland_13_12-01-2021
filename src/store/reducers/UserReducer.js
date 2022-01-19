const initialState = {
  firstName: undefined,
  lastName: undefined,
  id: undefined,
  email: undefined
};

/**
 * User Reducer
 * @param {object} state
 * @param {object} action
 */
export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_NAME': {
      return {
        ...state,
        firstName: action.payload.newFirstName,
        lastName: action.payload.newLastName
      }
    }
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        id: action.payload.id,
        email: action.payload.email,
      }
    }
    default: return state;
  }
}

//Actions types
export const EDIT_NAME = 'EDIT_NAME';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

//Actions Creators
export const setUserProfileAction = (payload) => ({ type: SET_USER_PROFILE, payload });
export const editNameAction = (payload) => ({ type: EDIT_NAME, payload });