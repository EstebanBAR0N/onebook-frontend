import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import mainTheme from './assets/themes/mainTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// custom components
import ErrorPage from './components/pages/ErrorPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import MobileMenu from './components/pages/MobileMenuPage';
import RegisterPage from './components/pages/RegisterPage';
import UserPage from './components/pages/UserPage';
import UploadPage from './components/pages/UploadPage';

import { ProvideAuth } from './context/useAuth';

import './assets/styles/index.css';

const theme = createTheme(mainTheme);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ProvideAuth>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="user" element={<UserPage />}>
                <Route path=":id" element={<UserPage />} />
              </Route>
              <Route path="mobileMenu" element={<MobileMenu />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="account/upload" element={<UploadPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
    <ToastContainer />
  </ProvideAuth>,
  rootElement
);
