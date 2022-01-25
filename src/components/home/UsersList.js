import React, { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UserPreview from './UserPreview';
import useFetch from "../../context/useFetch";


// check quand tu as le temps c'est le mieux : https://www.npmjs.com/package/react-infinite-scroll-component

function UsersList() {
  // init constantes
  const limit = 3;

  // init states
  const [url, setUrl] = React.useState(null);
  const [offset, setOffset] = useState(0);

  // on offset changes => fetch
  useEffect(() => {
    console.log(offset)
    const newURL = 'http://localhost:4000/api/user?limit=' + limit + '&offset=' + offset;
    setUrl(newURL);
  }, [offset]);

  const { data: users } = useFetch(url);

  // handle infinity scrool
  const handleScroll = useCallback((event) => {
    let scrollbarPosition = window.scrollY + window.innerHeight + 10;
    let windowSize = document.documentElement.scrollHeight;

    if (scrollbarPosition >= windowSize) {
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

    return () => { window.removeEventListener('scroll', window); };
  }, [handleScroll]);

  return (
    // home page content
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
      {/* list of user previews */}
      <List sx={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
        {users && users.map((user) => (
          <ListItem key={user.id} sx={{
            marginTop: { xs: (user.id === 1 ? 2 : 10), md: (user.id === 1 ? 5 : 20) },
          }}>
            <UserPreview username={user.username} userId={user.id} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default UsersList;