import { sendGetProfileRequest, sendEditNameRequest } from "../../services/api";

/**
 * Send get profile request to API then dispatch actions based on the response status 
 *  @return {Function} dispatch
 */
export function getUserProfile() {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_INIT' })
    const response = await sendGetProfileRequest();
    if (response.status === 200) {
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.body })
    }
    else {
      dispatch({ type: 'FETCH_USER_FAILED', payload: response })
    }
  }
}

/**
 *  Send edit name request to API then dispatch actions based on the response status 
 *  @param  {string}  newFirstName
 *  @param  {string}  newLastName
 *  @return {Function} dispatch
 */
export function editName(newFirstName, newLastName) {
  let firstName = newFirstName[0].toUpperCase() + newFirstName.substring(1);
  let lastName = newLastName[0].toUpperCase() + newLastName.substring(1);
  return async (dispatch) => {
    dispatch({ type: 'EDIT_NAME_INIT' })
    const response = await sendEditNameRequest(firstName, lastName)
    if (response.status === 200) {
      dispatch({ type: 'EDIT_NAME_SUCCESS', payload: response.body })
    }
    else {
      dispatch({ type: 'EDIT_NAME_FAILED', payload: response })
    }
  }
}