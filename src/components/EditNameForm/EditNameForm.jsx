import React, { useEffect, useState } from "react"
import { EditName } from "../../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function EditNameForm({ setEdit }) {
  //Get userInfos from the redux store
  const userInfos = useSelector((state) => state.user);
  //UseState
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  //Init useDispatch() to dispatch the edit name action on form submission
  const dispatch = useDispatch()

  useEffect(() => {
    formValidation();
  }, [newFirstName, newLastName])

  return (
    <div className="editNameForm">
      {displayError ? (<span style={{ color: "red" }}>{errorMsg}</span>) : null}
      <div className="editNameForm__inputs">
        <input className="editNameForm__inputs__input" placeholder={userInfos.firstName} onChange={(e) => setNewFirstName(e.target.value)} />
        <input className="editNameForm__inputs__input" placeholder={userInfos.lastName} onChange={(e) => setNewLastName(e.target.value)} />
      </div>
      <div className="editNameForm__btns">
        <button className="editNameForm__btns__btn" onClick={() => handleSubmit()}>Save</button>
        <button className="editNameForm__btns__btn" onClick={() => handleCancel()}>Cancel</button>
      </div>
    </div>
  )

  /**
   * If the form is valid, close form and dispatch the edit name action.
   * Else, display an error message
   * @return {void}
   */
  function handleSubmit() {
    if (isValid) {
      dispatch(EditName(newFirstName, newLastName))
      setEdit(false)
    } else {
      setDisplayError(true)
    }
  }

  /**
   * Check if the input fields are valid
   * If they are : set isValid on true and clear the error message.
   * If they are not: set isValid on false and set the error message.
   * @return {void}
   */
  function formValidation() {
    setDisplayError(false);
    let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (newFirstName.match(regex) && newLastName.match(regex)) {
      setIsValid(true);
      setErrorMsg("");
      return;
    }
    if (!newFirstName || !newLastName) {
      setErrorMsg("Veuillez renseigner tous les champs");
    } else {
      setErrorMsg("Les champs ne peuvent contenir que des lettres");
    }
    setIsValid(false);
  }

  /**
   * Close the form
   */
  function handleCancel() {
    setEdit(false)
  }
}

