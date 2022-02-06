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
      marginTop: { xs: '3em', md: '5em' },
    }}>
      {/* secondary container */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '12em',
        height: '12em',
      }}>
        {/* image */}
        <Box
          component="img"
          src={props.profilImage ? props.profilImage : 'https://images.assetsdelivery.com/compings_v2/pikepicture/pikepicture1612/pikepicture161200526.jpg'}
          alt='image'
          sx={{
            height: { xs: '8em', md: '10em' },
            width: { xs: '8em', md: '10em' },
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