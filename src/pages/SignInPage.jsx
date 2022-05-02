import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login } from '../components/Login';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../store/selectors';

/**
 * React Component for the login page
 * @component
 */
export function SignInPage() {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }

  return (
    <main className='main bg-dark'>
      <Login />
    </main>
  )
}