import { sendLoginRequest } from "../../services/api";
import { getUserProfile } from "./UserActions";

//Action Creators
export const LoginInitAction = () => ({ type: 'LOGIN_INIT' });
export const LoginSuccessAction = (payload) => ({ type: 'LOGIN_SUCCESS', payload: payload });
export const LoginFailedAction = (payload) => ({ type: 'LOGIN_FAILED', payload });

/**
 * Handle login attempt on submit
 * Send request to API then dispatch actions based on the response status
 * @param   {String}  userEmail   User email
 * @param   {String}  password    Password
 * @param   {Boolean} rememberMe  RememberMe checkbox value
 *
 * @returns ?
 */
export function login(userEmail, password, rememberMe) {
  return async (dispatch) => {
    dispatch(LoginInitAction());
    let request = await sendLoginRequest(userEmail, password)
    if (request.status === 200) {
      const payload = {
        token: request.body.token,
        rememberMe: rememberMe
      }
      dispatch(LoginSuccessAction(payload));
      dispatch(getUserProfile());
    }
    else {
      dispatch(LoginFailedAction(request.data))
    }
  }
}