import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

import '../../assets/styles/index.css';

import Navbar from '../Navbar';
import UserPreview from '../UserPreview';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function HomePage() {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.palette.BG.main }}>
      <Navbar />
      <UserPreview />
      {/* Footer */}
      {/* <Box sx={{ height: '1em', bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
    </Box>
  );
}

export default HomePage;
