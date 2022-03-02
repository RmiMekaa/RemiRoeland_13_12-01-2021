import { sendLoginRequest } from "../../services/api";
import { getUserProfile } from "./UserActions";

/**
 * Send login request to API then dispatch actions based on the response status
 * @param   {String}  userEmail   User email
 * @param   {String}  password    Password
 * @param   {Boolean} rememberMe  RememberMe checkbox value
 *
 * @returns {function}
 */
export function login(userEmail, password, rememberMe) {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_INIT' });
    const response = await sendLoginRequest(userEmail, password);
    if (response.status === 200) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: response.body.token,
          rememberMe: rememberMe
        }
      });
      dispatch(getUserProfile());
    }
    else {
      console.log(response);
      dispatch({ type: 'LOGIN_FAILED', payload: response });
    }
  }
}