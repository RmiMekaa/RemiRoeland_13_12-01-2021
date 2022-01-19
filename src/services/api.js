import axios from "axios";
import store from "../store";

const BaseUrl = 'http://localhost:3001/api/v1';

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
  const config = configAuthHeader();
  const payload = {
    email: email,
    password: password
  }
  const res = await axios.post(BaseUrl + '/user/login', payload, config)
  return res.data;
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

/**
 * Send Edit Name request to the API
 * @param   {String}  newFirstName
 * @param   {String}  newFirstName
 * @return  {Promise}
 */
// export async function sendEditNameRequest(newFirstName, newLastName) {
//   const config = configAuthHeader();
//   const payload = {
//     firstName: newFirstName,
//     lastName: newLastName,
//   }
//   const res = await axios.put(BaseUrl + '/user/profile', payload, config)
//   return res.data;
// }
/**
 * Get the user profile from the API
 * @return  {Promise}
 */
// export async function sendGetProfileRequest() {
//   const config = configAuthHeader();
//   const res = await axios.post(BaseUrl + '/user/profile', {}, config)
//   return res.data;
// }

