import React from "react";

/**
 * Loader component
 * @returns {React.ReactElement} 
 */
export function Loader() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}