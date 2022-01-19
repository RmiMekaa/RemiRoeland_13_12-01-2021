import React from "react";
import { Navigate, Route } from "react-router-dom";

export function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = true;
  console.log(isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/sign-in" />
      }
    />
  );
}
