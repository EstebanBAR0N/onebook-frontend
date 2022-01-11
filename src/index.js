import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ErrorPage from './components/pages/ErrorPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import UserPage from './components/pages/UserPage';
import UploadPage from './components/pages/UploadPage';

// définition du theme pour toutes les pages
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MuiThemeProvider,StylesProvider } from "@material-ui/core/styles";
import mainTheme from './assets/themes/mainTheme';

import './assets/styles/index.css';

const theme = createTheme(mainTheme);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="user" element={<UserPage />}>
              <Route path=":id" element={<UserPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="account/upload" element={<UploadPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>,
  rootElement
);
