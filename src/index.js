import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './assets/styles/index.css';

import HomePage from './components/pages/HomePage'; 
import UserPage from './components/pages/UserPage';
import LoginPage from './components/pages/LoginPage';
import ErrorPage from './components/pages/ErrorPage';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user" element={<UserPage />}>
        <Route path=":id" element={<UserPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
