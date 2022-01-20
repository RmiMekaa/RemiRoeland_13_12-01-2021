import { sendGetProfileRequest } from "../../services/api";

//Actions Creators
export const fetchUserInitAction = () => ({ type: 'FETCH_USER_INIT' });
export const fetchUserSuccessAction = (payload) => ({ type: 'FETCH_USER_SUCCESS', payload });
export const fetchUserFailedAction = (payload) => ({ type: 'FETCH_USER_FAILED', payload });
export const editNameAction = (payload) => ({ type: 'EDIT_NAME', payload });

/**
 * Send get profile request to API then dispatch actions based on the response status 
 *  @returns ?
 */
export function getUserProfile() {
  return async (dispatch) => {
    dispatch(fetchUserInitAction())
    const request = await sendGetProfileRequest();
    console.log(request);
    if (request.status === 200) {
      dispatch(fetchUserSuccessAction(request.body))
    }
    else {
      console.log(request.data);
      dispatch(fetchUserFailedAction(request.data))
    }
  }
}