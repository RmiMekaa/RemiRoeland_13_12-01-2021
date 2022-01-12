import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav/MainNav';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { UserPage } from './pages/UserPage/UserPage';
import { TransactionsPage } from './pages/TransactionsPage/TransactionsPage';
import { Page404 } from './pages/Page404/Page404';
import './main.scss';

/* 
REDUX
1- Provider qui englobe l'app
2- Creation du store
3- Creation des reducers
4- Creation des actions
5- Sauvegarder l'état dans le localStorage
*/
import { Provider } from 'react-redux';
import store from './store/index'

//Looking for token in the localStorage
const token = JSON.parse(localStorage.getItem('token'));
if (token) {
  console.log('token find in ls:', token);
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:accountId/transactions" element={<TransactionsPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
