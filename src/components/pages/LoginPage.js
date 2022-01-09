import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/pages/LoginPage.css';

function LoginPage() {
  return (
    <div class="login-main-container">
      <h1>Login Page</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default LoginPage;
