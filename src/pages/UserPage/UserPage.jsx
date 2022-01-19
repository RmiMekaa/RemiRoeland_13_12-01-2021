import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import { Account } from "../../components/Account/Account";
import { accountsMockData } from "../../mocks/accounts";
import { selectAuthLoggedIn } from "../../store/selectors";
import { sendGetProfileRequest } from "../../services/api";
import { setUserProfileAction } from "../../store/reducers/UserReducer";
import { Loader } from "../../components/Loader/Loader";
import { Navigate } from "react-router-dom";

export function UserPage() {
  const isLoggedIn = useSelector(selectAuthLoggedIn)
  const dispatch = useDispatch();
  const accounts = accountsMockData; //Accounts data mock
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  useEffect(() => {
    async function setUserProfile() {
      setIsLoading(true);
      setError(false)
      let response = await sendGetProfileRequest();
      if (response.status === 200) {
        dispatch(setUserProfileAction(response.body))
      }
      else {
        setError(true)
        setErrorMsg(response.data.message)
      }
      setIsLoading(false);
    }
    setUserProfile()
  }, [dispatch])

  if (!isLoggedIn) { return <Navigate to='/login' /> }

  if (isLoading) { return <Loader /> }

  if (error) {
    return (
      <div className="request-failed-msg">
        <h2>Oops...</h2>
        <p>
          Failed to retrieve profile, please try again later <br />
          <span>Error: {errorMsg}</span>
        </p>
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <main className="main bg-dark">
        <h2 className="sr-only">Accounts</h2>
        <UserHeader />
        {accounts.map((account) => (
          <Account key={account.id + account.name} data={account} />
        ))}
      </main>
    )
  }
}