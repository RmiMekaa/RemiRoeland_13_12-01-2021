import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Loader } from "../Loader/Loader";
import { selectAuthError, selectAuthLoading } from "../../store/selectors";
import { sendGetProfileRequest, sendLoginRequest } from "../../services/api";
import { LoginInitAction, LoginFailedAction, LoginSuccessAction } from "../../store/reducers/AuthReducer";
import { setUserProfileAction } from "../../store/reducers/UserReducer";

/**
 * React Component for the login form
 * @component
 */
export function Login() {
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {isLoading ? <Loader /> : (
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error ? <span className="sign-in-errorMsg" >Identifiants incorrects</span> : null}
          <button className="sign-in-button">Sign In</button>
        </form>
      )}
    </section>
  )

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginInitAction);
    sendLoginRequest(userEmail, password)
      .then(res => {
        const payload = {
          token: res.body.token,
          rememberMe: rememberMe
        }
        dispatch(LoginSuccessAction(payload))
      })
      .catch(error => {
        console.log(error)
        dispatch(LoginFailedAction(error))
      })
  }
}