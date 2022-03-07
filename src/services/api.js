import axios from "axios";
import store from "../store";

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const paths = {
  "login": {
    src   : '/user/login',
    method: "post"
  },
  "getProfile": {
    src   : '/user/profile',
    method: "post"
  },
  "editName": {
    src   : '/user/profile',
    method: "put"
  }
}

/**
 * Send Login request to the API
 * @param   {String}  type      The type of request ('login' | 'getProfile' | 'editName')
 * @param   {Object}  payload   Optionnal payload
 * @return  {Promise}
 */
export async function sendApiRequest(type, payload = {}) {
  const { src, method } = paths[type];
  const config = { headers: { Authorization: `Bearer ${store.getState().auth.token}` }};
  try {
    const response = await axios[method](src, payload, config);
    return response.data;
  } catch (err) {
    if (err.response.status === 404) return "Sorry, the service is unavailable at the moment";
    if (type === 'login') return err.response.data.message;
    return err.response.status + " " + err.response.statusText;
  }
}