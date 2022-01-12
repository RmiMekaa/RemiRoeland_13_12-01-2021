import React from "react";
import { UserHeader } from "../../components/UserHeader/UserHeader";
import { Account } from "../../components/Account/Account";
import { accountsMockData } from "../../mocks/accounts";
import { getUserProfile } from "../../store/actions/UserActions";
import { useDispatch } from "react-redux";

export function UserPage() {

  const dispatch = useDispatch()
  dispatch(getUserProfile());

  // Mock Data ↓
  const accounts = accountsMockData

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