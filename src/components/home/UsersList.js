import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UserPreview from './UserPreview';


function UsersList(props) {
  return (
    // home page content
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden',
    }}>
      {/* no user found */}
      <Box sx={{
        display: (props.users.length === 0 && props.searchBarQuery ? 'flex' : 'none'),
        position: 'absolute',
        left: 'calc(50% - 10em)',
        top: 'calc(50% - 10em)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20em',
        height: '20em',
      }}>
        <Typography sx={{
          fontSize: {xs: '16px', md: '20px'},
        }}>
          Aucun utilisateur trouvé.
        </Typography>
      </Box>
      {/* list of user previews */}
      <List sx={{
        display: (props.users.length > 0 ? 'flex' : 'none'),
        flexDirection: 'column',
        width: '100vw',
      }}>
        {props.users && props.users.map((user) => {
          return (
            <ListItem key={user.id} sx={{
              marginTop: { xs: (user.id === 1 ? 2 : 10), md: (user.id === 1 ? 5 : 20) },
            }}>
              <UserPreview username={user.username} userId={user.id} />
            </ListItem>
          )
        }
        )}
      </List>
    </Box>
  );
}

export default UsersList;