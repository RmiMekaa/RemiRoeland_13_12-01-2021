import React from "react";
import { EditNameForm } from "./EditNameForm";
import { useSelector, useDispatch } from "react-redux";
import { selectUserFirstName, selectUserLastName, selectDisplayEditForm } from "../store/selectors";

/**
 * User header component
 * @returns {React.ReactElement} 
 */
export function UserHeader() {
  const firstName = useSelector(selectUserFirstName)
  const lastName = useSelector(selectUserLastName)
  const displayEditForm = useSelector(selectDisplayEditForm)
  const dispatch = useDispatch()

  return (
    <div className="userHeader">
      {displayEditForm ? (
        <div>
          <h1>Welcome back</h1>
          <EditNameForm />
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{firstName} {lastName}</h1>
          <button className="edit-button" onClick={() => dispatch({ type: 'OPEN_FORM' })}>Edit Name</button>
        </div>
      )}
    </div >
  )
}

