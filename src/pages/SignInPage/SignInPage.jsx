import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import { useSelector } from 'react-redux';

/**
 * React Component for the login page
 * @component
 */
export function SignInPage() {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  // If the user is already connected, redirect to the user page
  if (isLoggedIn) {
    return <Navigate to="/user" />
  }
  // Else, display sign up form
  return (
    <main className='main bg-dark'>
      <Login />
    </main>
  )
}