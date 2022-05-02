import React, { useState } from "react";
import arrowIcon from '../../assets/arrowIcon.png';
import editIcon from '../../assets/editIcon.png';

/**
 * React component for transaction
 * @param {*} props 
 * @returns 
 */
export function Transaction(props) {
  const { date, description, amount, balance, type, category, notes } = props.data;
  const [editCategory, setEditCategory] = useState(false);
  const [editNotes, setEditNotes] = useState(false);

  const [newCategory, setNewCategory] = useState(null);
  const [newNotes, setNewNotes] = useState(null);

  const Category = () => {
    return (
      <span>
        {newCategory ? newCategory : category}
        <img className="editIcon" src={editIcon} alt='' onClick={() => setEditCategory(true)} />
      </span>
    )
  }
  const EditCategory = () => {
    return (
      <select onChange={(e) => {
        setNewCategory(e.target.value);
        setEditCategory(false)
      }}>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Medical">Medical</option>
        <option value="Transports">Transports</option>
        <option value="Leisure">Leisure</option>
      </select>
    )
  }

  const Notes = () => {
    return (
      <div className="edit-notes">
        <textarea rows="5" onChange={(e) => setNewNotes(e.target.value)}></textarea>
        <button onClick={() => setEditNotes(false)}>OK</button>
      </div>
    )
  }
  const EditNotes = () => {
    return (
      <span>
        {newNotes ? newNotes : notes}
        <img className="editIcon" src={editIcon} alt='' onClick={() => setEditNotes(true)} />
      </span>
    )
  }

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
          {editCategory ? <EditCategory /> : <Category />}
        </li>
        <li className="transaction__infos__notes">
          Notes:
          {editNotes ? <Notes /> : <EditNotes />}
        </li>
      </ul>
    </details>
  )
}