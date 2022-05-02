import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectEditError, selectUserFirstName, selectUserLastName, selectUserLoading } from "../store/selectors";
import { editName } from "../store/actions/editName";
import { Loader } from "./Loader";

/**
 * React component for the edit name form
 * @component 
 */
export function EditNameForm() {
  const firstName = useSelector(selectUserFirstName)
  const lastName = useSelector(selectUserLastName)
  const loading = useSelector(selectUserLoading)
  const editRequestError = useSelector(selectEditError)

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [validationError, setValidationError] = useState("");

  const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="editNameForm">
        <Loader />
      </div>
    )
  }

  return (
    <div className="editNameForm">
      {validationError ? <span className="errorMsg">{validationError}</span> : null}
      {editRequestError ? <span className="errorMsg">{editRequestError}</span> : null}
      <div className="editNameForm__inputs">
        <input className="editNameForm__inputs__input" placeholder={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
        <input className="editNameForm__inputs__input" placeholder={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
      </div>
      <div className="editNameForm__btns">
        <button className="editNameForm__btns__btn" onClick={() => handleSubmit()}>Save</button>
        <button className="editNameForm__btns__btn" onClick={() => dispatch({ type: 'CLOSE_FORM' })}>Cancel</button>
      </div>
    </div>
  )

  /**
   * Handle form submission.
   * - If new name format is valid, dispatch the editName action
   * - Else display an error message
   * @return {void}
   */
  function handleSubmit() {
    if (!newFirstName || !newLastName) return setValidationError("Veuillez renseigner tous les champs")
    let regex = /^[a-z ,.'-]+$/i;
    let isValid = (newFirstName.match(regex) && newLastName.match(regex)) ? true : false;
    if (isValid) {
      dispatch(editName(newFirstName, newLastName))
    }
    setValidationError("Les champs ne peuvent contenir que des lettres")
  }
}