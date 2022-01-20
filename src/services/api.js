import axios from "axios";
import store from "../store";

const BaseUrl = 'http://localhost:3001/api/v1';

//DEV ONLY: Header with invalid token to test request error handling
const configWithInvalideToken = { headers: { Authorization: `Bearer 123` } };

/**
 * Get the token from the state and return pre config auth header for the request
 * @return  {Object}  Request header with the token
 */
function configAuthHeader() {
  const token = store.getState().auth.token;
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

/**
 * Send Login request to the API
 * @param   {String}  email User email
 * @param   {String}  password User password
 * @return  {Promise}
 */
export async function sendLoginRequest(email, password) {
  try {
    const config = configAuthHeader();
    const payload = {
      email: email,
      password: password
    }
    const response = await axios.post(BaseUrl + '/user/login', payload, config);
    return response.data;
  } catch (err) {
    return err.response;
  }
}

/**
 * Get the user profile from the API
 * @return  {Promise} If success, return data. Else, return the error
 */
export async function sendGetProfileRequest() {
  try {
    const config = configAuthHeader();
    const response = await axios.post(BaseUrl + '/user/profile', {}, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
}

/**
 * Send Edit Name request to the API
 * @param   {String}  newFirstName
 * @param   {String}  newFirstName
 * @return  {Promise}  If success, return data. Else, return the error
 */
export async function sendEditNameRequest(newFirstName, newLastName) {
  try {
    const config = configAuthHeader();
    const payload = {
      firstName: newFirstName,
      lastName: newLastName,
    }
    const response = await axios.put(BaseUrl + '/user/profile', payload, config);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
}

