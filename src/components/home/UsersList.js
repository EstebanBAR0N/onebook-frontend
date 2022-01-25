import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UserPreview from './UserPreview';
import useFetch from "../../context/useFetch";


function UsersList() {
  // init states
  const [offset, setOffset] = useState(0);
  const [url, setUrl] = React.useState(
    "http://localhost:4000/api/user?limit=10&offset=" + offset
  );

  // on offset changes => fetch
  useEffect(() => {
    const newURL = "http://localhost:4000/api/user?limit=10" + "&offset=" + offset;

    setUrl(newURL);
  }, [offset]);

  const [users] = useFetch(url);

  console.log(users);

  // infinity scroll
  window.addEventListener("scroll", (event) => {
    let scrollbarPosition = window.scrollY + window.innerHeight;
    let windowSize = document.documentElement.scrollHeight;
            
    if (scrollbarPosition >= windowSize) {
      console.log('offset : ', offset, 'users.lenght :', users.length);
      if (users && (offset + 10 <= users.length)) {
        setOffset(offset + 10);
      }
    }
  });

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