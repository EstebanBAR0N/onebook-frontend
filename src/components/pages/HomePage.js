import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import { useTheme } from "@material-ui/core/styles";

import '../../assets/styles/index.css';

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
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.palette.BG.main }}>
      <Navbar></Navbar>
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
    </Box>
  );
}

export default HomePage;
