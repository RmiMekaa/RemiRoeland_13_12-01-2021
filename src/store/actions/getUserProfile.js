import { sendApiRequest } from "../../services/api";

/**
 * Send get profile request to API then dispatch actions based on the response status 
 *  @return {Function} dispatch
 */
export function getUserProfile() {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_INIT' })
    const request = await sendApiRequest('getProfile');
    if (request.status === 200) {
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: request.body })
    }
    else {
      dispatch({ type: 'FETCH_USER_FAILED', payload: request })
    }
  }
}