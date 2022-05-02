import { Link } from "react-router-dom";

/**
 * Account component
 * @param {Object} account 
 * @param {Number} account.id Account id
 * @param {Number} account.amount Account amount
 * @param {Number} account.balance Account balance
 * @returns {React.ReactElement} 
 */
export function Account({ account }) {

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.id}</h3>
        <p className="account-amount">${account.amount}</p>
        <p className="account-amount-description">{account.balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">
          <Link className="transaction-button__link" to={`./${account.id}/transactions`}>View transactions</Link>
        </button>
      </div>
    </section>
  )
}