import { Link } from "react-router-dom";

export function Account(props) {
  const { id, amount, balance } = props.data;

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{id}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">
          <Link className="transaction-button__link" to={`./${props.data.id}/transactions`}>View transactions</Link>
        </button>
      </div>
    </section>
  )
}
