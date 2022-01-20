import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Loader } from "../Loader/Loader";
import { selectAuthError, selectAuthLoading } from "../../store/selectors";
import { login } from "../../store/actions/AuthActions";


/**
 * React Component for the login form
 * @component
 */
export function Login() {
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //Dev only
  const [selectedUser, setSelectedUser] = useState('Tony Stark');

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
          {error ? <span className="sign-in-errorMsg" >{error.message}</span> : null}
          <button className="sign-in-button">Sign In</button>
        </form>
      )}

      {/* DEV ONLY ↓ */}
      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}>
        <span>........For development only........</span>
        <div style={{ height: "30px", marginTop: "0.5rem", display: "flex", justifyContent: "space-between" }}>
          <select style={{ height: "30px", margin: "0" }} onChange={(e) => setSelectedUser(e.target.value)} id="user-select">
            <option value='Tony Stark' selected>Tony Stark</option>
            <option value='Steve Rogers'>Steve Rogers</option>
          </select>
          <button style={{ fontSize: "1rem", fontWeight: "bold", width: "40%", backgroundColor: "#00bc77", border: 'none', color: "white" }} onClick={() => autofill(selectedUser)}>Auto Fill</button>
        </div>
      </div>
      {/* DEV ONLY ↑ */}

    </section>
  )

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(userEmail, password, rememberMe))
  }

  //DEV ONLY
  function autofill(selectValue) {
    switch (selectValue) {
      case 'Tony Stark': {
        setUserEmail("tony@stark.com")
        setPassword("password123")
        break;
      }
      case 'Steve Rogers': {
        setUserEmail("steve@rogers.com")
        setPassword("password456")
        break;
      }
      default: return;
    }
  }
}