import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';

import '../../assets/styles/index.css';

import UserPageContent from '../UserPageContent';


function UserPage() {

  const userId = parseInt(window.location.pathname.split('/')[2]);
  if (!userId || userId < 1 || userId > 5) {
    window.location.href = "/ErrorPage";
    return;
  }

  return (
    <Box>
      <Navbar />
      <UserPageContent />
      <BackToTopButton />
    </Box>
  );
}

export default UserPage;


