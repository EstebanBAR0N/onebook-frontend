import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import UserImageList from './UserImageList';


function UserPreview() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '90vw', height: '100%', borderBottom: '1px solid red'}}>
          <span>User 1</span>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100%'}}>
          <UserImageList></UserImageList>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserPreview;