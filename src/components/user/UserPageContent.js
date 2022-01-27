import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';

import '../../assets/styles/fonts.css';

import UserHeader from './UserHeader';
import UserButtons from './UserButtons';
import UserContent from './UserContent';
import ImageModal from '../ImageModal';
import useFetch from "../../context/useFetch";


function UserPageContent() {
  // init variables
  const limit = 5;
  const userId = window.location.pathname.split('/')[2];
  const { data: user } = useFetch('http://localhost:4000/api/user/' + userId, true);

  // init states
  const [url, setUrl] = React.useState(null);
  const [format, setFormat] = useState('image');
  const [offset, setOffset] = useState(0);
  const [clearData, setClearData] = useState(false);

  // fetch data
  let { data: files, loading } = useFetch(url, clearData);

  // handle url state
  useEffect(() => {
    const newURL = 'http://localhost:4000/api/file?userId='
      + userId
      + '&format='
      + format
      + '&limit='
      + limit
      + '&offset='
      + offset;

    setUrl(newURL);
  }, [format, offset])


  // handle offset state
  const handleScroll = useCallback((event) => {
    let scrollbarPosition = window.scrollY + window.innerHeight + 10;
    let windowSize = document.documentElement.scrollHeight;

    if (scrollbarPosition >= windowSize) {
      setClearData(false);
      setOffset((oldOffset) => {
        if (!loading && oldOffset + limit <= files.length) {
          return oldOffset + limit;
        } else {
          return oldOffset
        }
      });
    }
  }, [files, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => { 
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  // handle format state
  function changeFormat(evt) {
    evt.preventDefault();

    // clear data, offset to 0 and change format
    setClearData(true);
    setOffset(0);
    setFormat(evt.target.value);
  }


  // handle modal
  const [open, setOpen] = React.useState(false);

  function handleImageClick(evt) {
    setUrl(evt.target.src);
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
      <UserHeader username={user.username} profilImage={user.profilImage} />
      <UserButtons onClick={changeFormat} />
      <UserContent onClick={handleImageClick} files={files} />
      <ImageModal handleClose={handleClose} url={url} show={open} />
    </Box>
  );
}

export default UserPageContent;