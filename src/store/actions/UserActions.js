import { sendGetProfileRequest } from "../../services/api";

//Actions Creators
export const fetchUserInitAction = () => ({ type: 'FETCH_USER_INIT' });
export const fetchUserSuccessAction = (payload) => ({ type: 'FETCH_USER_SUCCESS', payload });
export const fetchUserFailedAction = (payload) => ({ type: 'FETCH_USER_FAILED', payload });
export const editNameAction = (payload) => ({ type: 'EDIT_NAME', payload });

/**
 * Send get profile request to API then dispatch actions based on the response status 
 *  @return {Function}
 */
export function getUserProfile() {
  return async (dispatch) => {
    try {
      dispatch(fetchUserInitAction())
      const request = await sendGetProfileRequest();
      dispatch(fetchUserSuccessAction(request.body))
    }
    catch (err) {
      console.error(err);
      dispatch(fetchUserFailedAction(err))
    }
  }
}