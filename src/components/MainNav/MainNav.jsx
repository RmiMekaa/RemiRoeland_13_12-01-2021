import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SignOutAction } from "../../store/actions/AuthAction";

/**
 * React component for the nav
 * @component 
 */
export function MainNav() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn)
  const userName = useSelector((state) => state.user.firstName)
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {loggedIn ? (
          <div>
            <Link to="" className="main-nav-item main-nav-username">{userName}</Link>
            <Link to="/" className="main-nav-item" onClick={() => dispatch(SignOutAction())}><i className="fa fa-user-circle"></i> Sign Out</Link>
          </div>
        ) : (
          <Link to="/sign-in" className="main-nav-item" ><i className="fa fa-user-circle"></i> Sign In</Link>
        )
        }
      </div>
    </nav>
  )
}