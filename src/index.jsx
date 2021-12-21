import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav/MainNav';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import './main.scss';


ReactDOM.render(
  <React.StrictMode>
    <MainNav />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
