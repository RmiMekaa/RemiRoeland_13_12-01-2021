import { sendApiRequest } from "../../services/api";

/**
 *  Send edit name request to API then dispatch actions based on the response status 
 *  @param  {string}  newFirstName
 *  @param  {string}  newLastName
 *  @return {Function} dispatch
 */
export function editName(newFirstName, newLastName) {
  return async (dispatch) => {
    dispatch({ type: 'EDIT_NAME_INIT' })
    const payload = {
      firstName: newFirstName[0].toUpperCase() + newFirstName.substring(1),
      lastName: newLastName[0].toUpperCase() + newLastName.substring(1)
    }
    const response = await sendApiRequest('editName', payload)
    if (response.status === 200) {
      dispatch({ type: 'EDIT_NAME_SUCCESS', payload: response.body })
    }
    else {
      dispatch({ type: 'EDIT_NAME_FAILED', payload: response })
    }
  }
}