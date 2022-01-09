import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/pages/HomePage.css'

var users = [
  {
    name: "Bowser",
    number: 1,
  },
  {
    name: "Sonic",
    number: 2,
  },
  {
    name: "Mario",
    number: 3,
  },
  {
    name: "Luigi",
    number: 4,
  },
  {
    name: "Peach",
    number: 5,
  }
];

function HomePage() {
  return (
    <div class="home-main-container">
      <h1>Home Page</h1>
      <nav>
        {users.map(user => (
            <Link
              to={`/user/${user.number}`}
              key={user.number}
            >
              {user.name}
              <br/> 
            </Link>
        ))}
        <br/>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default HomePage;
