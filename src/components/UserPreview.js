import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import UserImageList from './UserImageList';


function UserPreview() {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{
          width: '90vw',
          height: '100%',
          borderBottom: '1px solid',
          borderColor: theme.palette.LIGHT_GREY.main
        }}>
          <Typography variant="h6" gutterBottom component="div" align="inherit" sx={{
            marginLeft: { xs: 2, md: 4 },
            marginBottom: '-3px',
            fontSize: { xs: '17px', sm: '18px', md: '21px' },
            fontFamily: 'Arsenal',
            color: theme.palette.TEXT.main
          }}
          >
            Neb_illust
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <UserImageList></UserImageList>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserPreview;