import React from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/index.css';

import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';
import UserPageContent from '../user/UserPageContent';


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


