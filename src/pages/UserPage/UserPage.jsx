import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import { Account } from "../../components/Account/Account";
import { accountsMockData } from "../../mocks/accounts";
import { selectAuthLoggedIn, selectUserError, selectUserLoading } from "../../store/selectors";
import { Loader } from "../../components/Loader/Loader";
import { Navigate } from "react-router-dom";

export function UserPage() {
  const isLoggedIn = useSelector(selectAuthLoggedIn)
  const fetchingProfile = useSelector(selectUserLoading)
  const fetchingProfileError = useSelector(selectUserError)
  const accounts = accountsMockData; //Accounts data mock

  if (!isLoggedIn) { return <Navigate to='/login' /> }

  if (fetchingProfile) { return <Loader /> }

  if (fetchingProfileError) {
    return (
      <div className="request-failed-msg">
        <h2>Oops...</h2>
        <p>
          Failed to retrieve profile, please try again later <br />
          <span>Error: {fetchingProfileError.message}</span>
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