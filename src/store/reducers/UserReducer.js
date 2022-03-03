const initialState = {
  firstName: null,
  lastName: null,
  id: null,
  email: null,
  loading: null,
  editError: null,
  displayEditForm: null,
};

/**
 * User Reducer
 * @param {object} state
 * @param {object} action
 */
export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_FORM': {
      return {
        ...state,
        displayEditForm: true,
        editError: null
      }
    }
    case 'CLOSE_FORM': {
      return {
        ...state,
        displayEditForm: false
      }
    }
    case 'EDIT_NAME_INIT': {
      return {
        ...state,
        loading: true,
        editError: null,
      }
    }
    case 'EDIT_NAME_SUCCESS': {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        loading: false,
        displayEditForm: false
      }
    }
    case 'EDIT_NAME_FAILED': {
      return {
        ...state,
        loading: false,
        editError: action.payload
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
    case 'DISCONNECT': return initialState;
    default: return state;
  }
}