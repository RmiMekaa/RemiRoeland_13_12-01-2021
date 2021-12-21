import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav/MainNav';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { SignIn } from './pages/SignIn/SignIn';
import { UserPage } from './pages/UserPage/UserPage';
import './main.scss';


ReactDOM.render(
  <React.StrictMode>
    <MainNav />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in.html" element={<SignIn />} />
        <Route path="/user.html" element={<UserPage />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
