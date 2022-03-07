import { sendApiRequest } from "../../services/api";
import axios from "axios";

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
    if (response.status === 200) {

      axios.defaults.headers.common['Authorization'] = "Bearer " + response.body.token;
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: response.body.token,
          rememberMe: rememberMe
        }
      });
    }
    else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: response
      });
    }
  }
}