import axios from "axios";
import { SIGN_IN, SIGN_OUT } from "./actionTypes";

/**
 * Send the SignIn request and dispatch confirmedSignInAction if success
 *
 * @param   {String}  email     User email
 * @param   {String}  password  User password
 */
export function SignIn(email, password) {
  return dispatch => {
    const postData = { email, password };
    axios.post('http://localhost:3001/api/v1/user/login', postData)
      .then(response => {
        const { token } = response.data.body;
        dispatch(SignInAction(token));
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

/**
 * Success Sign In action
 * @param   {String}  payload  jwtToken
 * @return  {Object}  action type and payload
 */
export function SignInAction(payload) {
  return {
    type: SIGN_IN,
    payload,
  }
}

export function SignOutAction() {
  return {
    type: SIGN_OUT
  }
}

