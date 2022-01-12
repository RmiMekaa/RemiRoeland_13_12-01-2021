import axios from "axios";
import store from "../index";
import { EDIT_NAME, GET_USER_PROFILE } from "./actionTypes";

export function EditName(firstName, lastName) {
  return (dispatch) => {
    const token = store.getState().auth.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const postData = { firstName, lastName }
    axios.put('http://localhost:3001/api/v1/user/profile', postData, config)
      .then(response => {
        dispatch(confirmedEditNameAction(response.data.body))
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function getUserProfile() {
  return (dispatch) => {
    const token = store.getState().auth.token;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.post('http://localhost:3001/api/v1/user/profile', {}, config)
      .then(response => {
        const userProfile = response.data.body;
        dispatch(GetUserProfileAction(userProfile))
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function GetUserProfileAction(payload) {
  return {
    type: GET_USER_PROFILE,
    payload
  }
}

export function confirmedEditNameAction(payload) {
  return {
    type: EDIT_NAME,
    payload
  }
}

