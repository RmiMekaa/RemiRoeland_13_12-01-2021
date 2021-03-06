import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserHeader } from "../components/UserHeader";
import { Account } from "../components/Account";
import { accountsMockData } from "../mocks/accounts";
import { selectAuthLoggedIn, selectAuthToken, selectUserError, selectUserLoading } from "../store/selectors";
import { Loader } from "../components/Loader";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getUserProfile } from "../store/actions/getUserProfile";

/**
 * User Page component
 * @returns {React.ReactElement} 
 */
export function UserPage() {
  const isLoggedIn = useSelector(selectAuthLoggedIn)
  const token = useSelector(selectAuthToken);
  const fetchingProfile = useSelector(selectUserLoading)
  const fetchingProfileError = useSelector(selectUserError)
  const accounts = accountsMockData; //Accounts data mock
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUserProfile())
    //As this page is a private route, we have to check the token expiration date and disconnect the user if it's expired
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: 'DISCONNECT' });
      }
    }
  }, [dispatch, token])

  if (!isLoggedIn) return <Navigate to='/login' />
  if (fetchingProfile) return <Loader />

  if (fetchingProfileError) {
    return (
      <div className="request-failed-msg">
        <h2>Oops...</h2>
        <p>
          Failed to retrieve profile, please try again later <br />
          <span>Error: {fetchingProfileError}</span>
        </p>
      </div>
    )
  }

  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      <UserHeader />
      {accounts.map((account) => (
        <Account {...{ account }} />
      ))}
    </main>
  )

}