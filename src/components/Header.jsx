import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthLoggedIn, selectUserError, selectUserFirstName } from "../store/selectors";

/**
 * Header component
 * @returns {React.ReactElement} 
 */
export function Header() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectAuthLoggedIn);
  const firstName = useSelector(selectUserFirstName);
  const userError = useSelector(selectUserError);

  const UserError = () => {
    return userError ? null : <Link to="/profile" className="header__nav__item"><i className="fa fa-user-circle"></i> {firstName} </Link>
  }

  const SignInButton = () => {
    return loggedIn ? (
      <div className="logged-in-nav">
        <UserError />
        <Link to="/" className="header__nav__item" onClick={() => dispatch({ type: 'DISCONNECT' })}><i className="fa fa-sign-out"></i> Sign Out</Link>
      </div>
    ) : (
      <Link to="/login" className="header__nav__item" ><i className="fa fa-user-circle"></i> Sign In</Link>
    )
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav__logo" to="/">
          <img src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <SignInButton />
        </div>
      </nav>
    </header>
  )
}