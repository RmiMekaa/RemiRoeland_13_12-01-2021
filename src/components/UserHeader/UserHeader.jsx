import React, { useState } from "react";
import { EditNameForm } from "../EditNameForm/EditNameForm";
import { useSelector } from "react-redux";

export function UserHeader() {
  const [edit, setEdit] = useState(false);
  const userName = useSelector((state) => state.user)

  return (
    <div className="header">
      {edit ? (
        <div>
          <h1>Welcome back</h1>
          <EditNameForm setEdit={setEdit} />
        </div>
      ) : (
        <div>
          <h1>Welcome back<br />{userName.firstName} {userName.lastName}</h1>
          <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
        </div>
      )}
    </div >
  )
}

