import { sendApiRequest } from "../../services/api";

/**
 * Send login request to API then dispatch actions based on the response status
 * @param   {String}  userEmail   User email
 * @param   {String}  password    Password
 * @param   {Boolean} rememberMe  RememberMe checkbox value
 *
 * @returns {function}
 */
export function login(email, password, rememberMe) {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_INIT' });
    const payload = {
      email: email,
      password: password
    }
    const response = await sendApiRequest('login', payload);
    if (response.status !== 200) {
      return dispatch({
        type: 'LOGIN_FAILED',
        payload: response
      });
    }
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token: response.body.token,
        rememberMe: rememberMe
      }
    });
  }
}