import React from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/index.css';

import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';
import UserPageContent from '../user/UserPageContent';


function UserPage() {
  return (
    <Box>
      <Navbar />
      <UserPageContent />
      <BackToTopButton />
    </Box>
  );
}

export default UserPage;


