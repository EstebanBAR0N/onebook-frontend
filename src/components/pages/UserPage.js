import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/index.css';

import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';
import UserPageContent from '../user/UserPageContent';


function UserPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Box>
      <Navbar />
      <UserPageContent />
      <BackToTopButton />
    </Box>
  );
}

export default UserPage;


