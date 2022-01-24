import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";

import Navbar from '../Navbar';
import UsersList from '../home/UsersList';
import BackToTopButton from '../BackToTopButton';
import { useAuth } from "../../context/useAuth";

import '../../assets/styles/index.css';


function HomePage() {
  const auth = useAuth();
  const theme = useTheme();

  console.log(auth.user);

  return (
    <Box style={{ backgroundColor: theme.palette.BG.main }}>
      <Navbar />
      <UsersList />
      <BackToTopButton />
    </Box>
  );
}

export default HomePage;
