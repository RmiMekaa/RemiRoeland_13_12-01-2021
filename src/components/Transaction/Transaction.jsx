import React, { useState } from "react";
import arrowIcon from '../../assets/arrowIcon.png';
import editIcon from '../../assets/editIcon.png';

export function Transaction(props) {
  const { date, description, amount, balance, type, category, notes } = props.data;
  const [editCategory, setEditCategory] = useState(false);
  const [editNotes, setEditNotes] = useState(false);

  return (
    <details className="transaction">
      <summary className="transaction__resume">
        <div className="transaction__icon">
          <img src={arrowIcon} alt="" />
        </div>
        <p>{date}</p>
        <p>{description}</p>
        <p>${amount}</p>
        <p>${balance}</p>
      </summary>
      <ul className="transaction__infos">
        <li>
          Transaction Type:
          <span>{type}</span>
        </li>
        <li className="transaction__infos__category">
          Category:
          {editCategory ? (
            <select onChange={() => setEditCategory(false)}>
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Medical">Medical</option>
              <option value="Transports">Transports</option>
              <option value="Leisure">Leisure</option>
            </select>
          ) : (
            <span>
              {category}
              <img className="editIcon" src={editIcon} alt='' onClick={() => setEditCategory(true)} />
            </span>
          )
          }
        </li>
        <li className="transaction__infos__notes">
          Notes:
          {editNotes ? (
            <div className="edit-notes">
              <textarea rows="5"></textarea>
              <button onClick={() => setEditNotes(false)}>OK</button>
            </div>
          ) : (
            <span>
              {notes}
              <img className="editIcon" src={editIcon} alt='' onClick={() => setEditNotes(true)} />
            </span>
          )
          }
        </li>
      </ul>
    </details>
  )
}