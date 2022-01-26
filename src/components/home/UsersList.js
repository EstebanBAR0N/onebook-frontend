import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import UserPreview from './UserPreview';


// check quand tu as le temps c'est le mieux : https://www.npmjs.com/package/react-infinite-scroll-component

function UsersList(props) {
  return (
    // home page content
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
      {/* list of user previews */}
      <List sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width:'100vw', 
      }}>
        {props.users && props.users.map((user) => (
          <ListItem key={user.id} sx={{
            marginTop: { xs: (user.id === 1 ? 2 : 10), md: (user.id === 1 ? 5 : 20) },
          }}>
            <UserPreview username={user.username} userId={user.id} />
          </ListItem>
        ))}
      </List>
      {/* no user found */}
      {/* <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography sx={{ 
          display: 'flex',//(props.users ? 'none' : 'block'),
          border: '1pw solid red'
        }}>
          {props.users ? "oui" : "non"}
          Aucun utilisateur trouvé.
        </Typography>
      </Box> */}
    </Box>
  );
}

export default UsersList;