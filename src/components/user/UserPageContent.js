import React, { useState } from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/fonts.css';

import UserHeader from './UserHeader';
import UserButtons from './UserButtons';
import UserContent from './UserContent';
import ImageModal from '../ImageModal';
import useFetch from "../../context/useFetch";
import { useAuth } from "../../context/useAuth";


function UserPageContent() {
  // user context
  const auth = useAuth();

  // init variables
  let offset = 0;
  const username = 'Neb_illust';

  // handle fetch files
  console.log("user id: ", auth.user.id )

  const [format, setFormat] = useState('image');
  const [url, setUrl] = React.useState(
    "http://localhost:4000/api/file?userId=" +
    1 +
    "&format=" + format +
    "&limit=12" +
    "&offset=" + offset
  );
  const files = useFetch(url);

  console.log("url : ", url, "files : ", files);

  // handle modal
  const [open, setOpen] = React.useState(false);

  function handleImageClick(evt) {
    setUrl(evt.target.srcset);
    if (window.innerWidth >= 650) {
      setOpen(true);
    }
  }

  const handleClose = () => setOpen(false);

  return (
    // user page content
    <Box container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      <UserHeader username={username} />
      <UserButtons />
      <UserContent onClick={handleImageClick} files={files} />
      <ImageModal handleClose={handleClose} url={url} show={open} />
    </Box>
  );
}

export default UserPageContent;