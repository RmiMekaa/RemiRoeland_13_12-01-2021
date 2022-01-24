import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { UserPage } from './pages/UserPage/UserPage';
import { TransactionsPage } from './pages/TransactionsPage/TransactionsPage';
import { Page404 } from './pages/Page404/Page404';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './main.scss';

/* 
REDUX
1- Provider qui englobe l'app
2- Creation du store
3- Creation des reducers
4- Creation des actions
5- Sauvegarder l'état dans le sessionStorage/localStorage
*/
import { Provider } from 'react-redux';
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/profile/:accountId/transactions" element={<TransactionsPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
