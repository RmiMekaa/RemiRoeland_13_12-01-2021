import React, { useState } from "react";
import { EditNameForm } from "../EditNameForm/EditNameForm";
import { useSelector } from "react-redux";
import { selectUserFirstName, selectUserLastName } from "../../store/selectors";

export function UserHeader() {
  const [edit, setEdit] = useState(false);
  const firstName = useSelector(selectUserFirstName)
  const lastName = useSelector(selectUserLastName)

  return (
    <div className="userHeader">
      {edit ? (
        <div>
          <h1>Welcome back</h1>
          <EditNameForm setEdit={setEdit} />
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{firstName} {lastName}</h1>
          <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
        </div>
      )}
    </div >
  )
}

