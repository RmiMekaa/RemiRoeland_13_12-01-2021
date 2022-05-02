import React from "react";
import { Transaction } from "../../components/Transaction/Transaction";
import { accountsMockData } from "../../mocks/accounts";
import { useParams } from "react-router-dom";

export function TransactionsPage() {

  // Mock Data
  const { accountId } = useParams();
  let account = accountsMockData.find(acc => acc.id === accountId);

  return (
    <main className="transactionsPage">
      <section className="account-resume">
        <h3 className="account-resume__title">{account.id}</h3>
        <p className="account-resume__amount">${account.amount}</p>
        <p className="account-resume__balance">{account.balance}</p>
      </section>
      <section className="transactions">
        <ul className="transactions__labels">
          <li>Date</li>
          <li>Description</li>
          <li>Amount</li>
          <li>Balance</li>
        </ul>
        {account.transactions.length > 0 ? account.transactions.map((transaction) => (
          <Transaction key={transaction.id} data={transaction} />
        )) : null}
      </section>
    </main>
  )
}