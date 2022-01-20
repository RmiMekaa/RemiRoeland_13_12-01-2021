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
    case 'FETCH_USER_INIT': {
      return {
        ...state,
        loading: true
      }
    }
    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        id: action.payload.id,
        email: action.payload.email,
        loading: false
      }
    }
    case 'FETCH_USER_FAILED': {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }

    default: return state;
  }
}