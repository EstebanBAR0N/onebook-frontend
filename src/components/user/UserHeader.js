import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";

import '../../assets/styles/fonts.css';
    
function UserHeader(props) {
  const theme = useTheme();

  return (
    // main container
    <Box container sx={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '18em',
    }}>
      {/* secondary container */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* image */}
        <Box 
          component="img" 
          src='https://images.assetsdelivery.com/compings_v2/pikepicture/pikepicture1612/pikepicture161200526.jpg' 
          alt='image' 
          sx={{ 
            height: { xs: '8em', md: '10em' }, 
            width: 'auto', 
            minWidth: { xs: '8em', md: '10em' }, 
            borderRadius: '50%',
          }}
        />
        {/* text container */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1em',
        }}>
          {/* text */}
          <Typography style={{
            fontSize: '22px',
            fontFamily: 'Arsenal', 
            color: theme.palette.TEXT.main,

          }}>
              {props.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default UserHeader;