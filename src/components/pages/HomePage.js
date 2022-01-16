import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import Navbar from '../Navbar';
import UsersList from '../UsersList';
import '../../assets/styles/index.css';


function HomePage() {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.palette.BG.main }}>
      <Navbar />
      <UsersList />
    </Box>
  );
}

export default HomePage;
