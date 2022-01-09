import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/pages/UserPage.css';


function UserPage() {
  const userId = parseInt(window.location.pathname.split('/')[2]);
  if (!userId || userId < 1 || userId > 5) {
    window.location.href = "/ErrorPage";
    return;
  }
  return (
    <div class="user-main-container">
      <h1>User Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default UserPage;
