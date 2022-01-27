import React from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/index.css';

import Navbar from '../Navbar';
import BackToTopButton from '../BackToTopButton';
import UserPageContent from '../user/UserPageContent';
import { useNavigate } from 'react-router-dom';


function UserPage() {
  const navigate = useNavigate();

  /* HANDLE NAVBAR SUBMIT */
  const onSearchbarSubmit = (evt) => {
    evt.preventDefault();
    navigate('/');
  }

  return (
    <Box>
      <Navbar onSearchbarSubmit={onSearchbarSubmit} />
      <UserPageContent />
      <BackToTopButton />
    </Box>
  );
}

export default UserPage;


