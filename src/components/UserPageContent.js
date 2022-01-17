import * as React from 'react';
import Box from '@mui/material/Box';

import '../assets/styles/fonts.css';

import UserHeader from './UserHeader';
import UserButtons from './UserButtons';
import UserContent from './UserContent';
    
function UserPageContent() {

  const username = 'Neb_illust';

  return (
    // main container
    <Box container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100%',
    }}>
      <UserHeader username={username} />
      <UserButtons />
      <UserContent />
    </Box>
  );
}

export default UserPageContent;