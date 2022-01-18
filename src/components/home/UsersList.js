import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UserPreview from './UserPreview';

const users = [1, 2, 3, 4, 5, 6, 7];

function UsersList() {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
      <List sx={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
        {users.map((user) => (
          <ListItem key={user} sx={{ 
            marginTop: { xs: (user === 1 ? 2 : 10), md: (user === 1 ? 5 : 20) },
          }}>
            <UserPreview userId={user} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default UsersList;