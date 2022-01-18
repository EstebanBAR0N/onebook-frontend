import * as React from 'react';
import Box from '@mui/material/Box';

import '../assets/styles/fonts.css';

import UserHeader from './UserHeader';
import UserButtons from './UserButtons';
import UserContent from './UserContent';
import ImageModal from './ImageModal';


function UserPageContent() {
  const username = 'Neb_illust';

  const [url, setUrl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleImageClick(evt) {
    setUrl(evt.target.srcset);
    if (window.innerWidth >= 650) {
      setOpen(true);
    }
  }

  const handleClose = () => setOpen(false);

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
      <UserContent onClick={handleImageClick} />
      <ImageModal handleClose={handleClose} url={url} show={open} />
    </Box>
  );
}

export default UserPageContent;