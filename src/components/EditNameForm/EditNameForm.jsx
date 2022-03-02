import React from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selectors";
import { useState } from "react";
import { editName } from "../../store/actions/UserActions";
import { Loader } from "../Loader/Loader";

/**
 * React component for the edit name form
 * @param {Object} props
 * @property {function} props.setEdit
 * @component 
 */
export function EditNameForm(props) {
  const { setEdit } = props;
  const userState = useSelector(selectUser);
  const { firstName, lastName, loading, error } = userState;
  const dispatch = useDispatch();

  const [firstNameInputValue, setNewFirstNameInputValue] = useState(firstName);
  const [lastNameInputValue, setNewLastNameInputValue] = useState(lastName);
  const [displayError, setDisplayError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (loading || error) {
    return (
      <div className="editNameForm">
        {loading ? <Loader /> : <span>{error}</span>}
      </div>
    )
  }

  return (
    <div className="editNameForm">
      {displayError ? (<span className="errorMsg">{errorMsg}</span>) : null}
      <div className="editNameForm__inputs">
        <input className="editNameForm__inputs__input" placeholder={firstName} onChange={(e) => setNewFirstNameInputValue(e.target.value)} />
        <input className="editNameForm__inputs__input" placeholder={lastName} onChange={(e) => setNewLastNameInputValue(e.target.value)} />
      </div>
      <div className="editNameForm__btns">
        <button className="editNameForm__btns__btn" onClick={() => handleSubmit()}>Save</button>
        <button className="editNameForm__btns__btn" onClick={() => setEdit(false)}>Cancel</button>
      </div>
    </div>
  )

  /**
   * Handle form submission
   * If form is valid, dispatch the editName action
   * @return {void}
   */
  function handleSubmit() {
    let isValid = formValidation();
    if (isValid) {
      let newFirstName = firstNameInputValue[0].toUpperCase() + firstNameInputValue.substring(1);
      let newLastName = lastNameInputValue[0].toUpperCase() + lastNameInputValue.substring(1);
      dispatch(editName(newFirstName, newLastName))
      setEdit(false)
    }
  }

  /**
   * Check if the input fields are valid
   * If they are not: display an error message.
   * @return {boolean}
   */
  function formValidation() {
    let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/u;
    if (firstNameInputValue.match(regex) && lastNameInputValue.match(regex)) return true;
    if (!firstNameInputValue || !lastNameInputValue) setErrorMsg("Veuillez renseigner tous les champs")
    else setErrorMsg("Les champs ne peuvent contenir que des lettres")
    setDisplayError(true);
    return false;
  }
}