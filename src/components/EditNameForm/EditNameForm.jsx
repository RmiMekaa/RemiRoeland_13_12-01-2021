import React from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserFirstName, selectUserLastName } from "../../store/selectors";
import { useState } from "react";
import { sendEditNameRequest } from "../../services/api";
import { editNameAction } from "../../store/reducers/UserReducer";

/**
 * React component for the edit name form
 * @param {Object} props
 * @property {function} props.setEdit
 * @component 
 */
export function EditNameForm(props) {
  const { setEdit } = props;
  const firstName = useSelector(selectUserFirstName);
  const lastName = useSelector(selectUserLastName)
  const dispatch = useDispatch()

  const [firstNameInputValue, setNewFirstNameInputValue] = useState(firstName);
  const [lastNameInputValue, setNewLastNameInputValue] = useState(lastName);
  const [displayError, setDisplayError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  return (
    <div className="editNameForm">
      {displayError ? (<span style={{ color: "red" }}>{errorMsg}</span>) : null}
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
   * 1- Capitalize firstName and lastName
   * 2- Send the edit name request
   * 3- If request is successful, dispatch the edit name action
   * @returns {Promise<void>}
   */
  async function handleSubmit() {
    let isValid = formValidation();
    if (isValid) {
      let newFirstName = firstNameInputValue[0].toUpperCase() + firstNameInputValue.substring(1)
      let newLastName = lastNameInputValue[0].toUpperCase() + lastNameInputValue.substring(1)
      let response = await sendEditNameRequest(newFirstName, newLastName)
      if (response.status === 200) {
        const payload = { newFirstName, newLastName }
        dispatch(editNameAction(payload))
        setEdit(false)
      }
      else {
        setDisplayError(true)
        let message = "Sorry, you are not allowed to do this. Error: " + response.data.message;
        setErrorMsg(message)
      }
    }
  }

  /**
   * Check if the input fields are valid
   * If they are not: display an error message.
   * @return {boolean}
   */
  function formValidation() {
    let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (firstNameInputValue.match(regex) && lastNameInputValue.match(regex)) {
      return true;
    }
    else if (!firstNameInputValue || !lastNameInputValue) { setErrorMsg("Veuillez renseigner tous les champs") }
    else { setErrorMsg("Les champs ne peuvent contenir que des lettres") }
    setDisplayError(true);
    return false;
  }

}