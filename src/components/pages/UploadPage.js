import React from 'react';
import { Link } from "react-router-dom";


function UploadPage() {
  return (
    <div className="user-main-container">
      <h1>Upload Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default UploadPage;
