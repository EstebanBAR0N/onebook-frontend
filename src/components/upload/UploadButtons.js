import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';


const useStyles = makeStyles({
  redButton: {
    '&:hover': {
      backgroundColor: '#DF4B45',
      color: '#212121',
    },
  },
  greenButton: {
    '&:hover': {
      backgroundColor: '#5FC569',
      color: '#212121',
    },
  }
})

function UploadButtons() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    // main buttons container
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: { xs: '5em', md: '5em' },
      width: { xs: '80%', sm: '70%', md: '70%' },
    }}>
      {/* secondary buttons container */}
      <Box sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        {/* desktop screen */}
        <Button
          className={classes.redButton}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.RED.main,
            borderRadius: '45px',
            margin: '2em',
            width: '13em',
            height: '3em',
          }}
        >
          TOUT SUPPRIMER
        </Button>
        <Button
          className={classes.greenButton}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.GREEN.main,
            borderRadius: '45px',
            margin: '2em',
            width: '13em',
            height: '3em',
          }}
        >
          ENREGISTRER
        </Button>
      </Box>

      {/* mobile screen */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
        <Button
          className={classes.redButton}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.RED.main,
            borderRadius: '50%',
            height: '60px',
            width: '60px',
            margin: '2em',
          }}
        >
          <ClearIcon sx={{
            borderRadius: '50%',
            width: '1.3em',
            height: '1.3em',
          }} />
        </Button>
        <Button
          className={classes.greenButton}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.GREEN.main,
            borderRadius: '50%',
            height: '60px',
            width: '60px',
            margin: '2em',
          }}
        >
          <DoneIcon sx={{
            borderRadius: '50%',
            width: '1.3em',
            height: '1.3em',
          }} />
        </Button>
      </Box>
    </Box>
  );
}

export default UploadButtons;
