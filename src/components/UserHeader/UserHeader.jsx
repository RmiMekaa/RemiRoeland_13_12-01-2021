import React from "react";
import { EditNameForm } from "../EditNameForm/EditNameForm";
import { useSelector } from "react-redux";
import { selectUserFirstName, selectUserLastName, selectDisplayEditForm } from "../../store/selectors";
import { useDispatch } from "react-redux";

/**
 * React component for the user header on the profile page
 * @component
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

