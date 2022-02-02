import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from "@material-ui/core/styles";

import Navbar from '../Navbar';
import UsersList from '../home/UsersList';
import BackToTopButton from '../BackToTopButton';
import useFetch from "../../context/useFetch";
import { API_URL } from '../../constants';

import '../../assets/styles/index.css';


function HomePage() {
  const theme = useTheme();

  // init constantes
  const limit = 10;

  // init states
  const [offset, setOffset] = useState(0);
  const [url, setUrl] = React.useState(null);
  const [clearData, setClearData] = useState(false);
  const [sortByUsername, setSortByUsername] = useState(false);
  const [searchBarQuery, setSearchBarQuery] = useState(false);

  let { data: users, loading } = useFetch(url, clearData, sortByUsername);


  // url update when offset has changed
  useEffect(() => {
    const regex = /offset=\d+/;
    const newURL = url ?
      url.replace(regex, 'offset=' + offset)
      : API_URL+'/api/user?limit=' + limit + '&offset=' + offset;
    setUrl(newURL);

  }, [offset]);


  // offset update (handle infinity scrool)
  const handleScroll = useCallback((event) => {
    let scrollbarPosition = window.scrollY + window.innerHeight + 100;
    let windowSize = document.documentElement.scrollHeight;

    if (scrollbarPosition >= windowSize) {
      setClearData(false);
      setSortByUsername(false);
      setOffset((oldOffset) => {
        if (oldOffset + limit <= users.length) {
          return oldOffset + limit;
        } else {
          return oldOffset
        }
      });
    }
  }, [users, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => { window.removeEventListener('scroll', handleScroll); };
  }, [handleScroll]);
  

  /* HANDLE NAVBAR CHANGES */
  const onSearchChange = (evt) => {
    const newURL = API_URL+'/api/user?limit='
      + limit
      + '&offset=0'
      + '&username='
      + evt.target.value;

    setOffset(0);
    setClearData(true);
    setSortByUsername(true);
    setSearchBarQuery(true);
    setUrl(newURL);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  return (
    <Box style={{ backgroundColor: theme.palette.BG.main }}>
      <Navbar onSearchChange={onSearchChange} displaySearchBar={true} />
      <UsersList users={users} searchBarQuery={searchBarQuery} />
      <BackToTopButton />
      <Box 
        sx={{ 
          display: (loading ? 'flex' : 'none'),
          justifyContent: 'center',
          height: '4em',
          margin: '7em',
        }}
      >
        <CircularProgress size='4em' />
      </Box>
    </Box>
  );
}

export default HomePage;
