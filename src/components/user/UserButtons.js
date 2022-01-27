import * as React from 'react';
import { useState } from "react";
import { alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';

import '../../assets/styles/fonts.css';

const useStyles = makeStyles({
  button: {
    '&:hover': {
      border: 'none',
      borderBottom: '1px solid #757575',
    },
  }
})

function UserButtons(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [selectedButton, setSelectedButton] = useState(1);

  const selectButton = (evt) => {
    setSelectedButton(evt.target.tabIndex);
    props.onClick(evt);
  }

  return (
    // main container
    <Box container sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: { md: '2em' },
    }}>
      {/* buttons container */}
      <ButtonGroup aria-label="text button group" sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90vw',
      }}>
        {/* buttons */}
        <Button 
          value='image' 
          onClick={selectButton} 
          tabIndex={1} 
          className={classes.button} 
          sx={{
            width: '100%',
            color: alpha(theme.palette.TEXT.main, (selectedButton === 1 ? 1 : 0.5)),
            borderRadius: 0,
            border: 'none',
            borderBottom: '1px solid',
            borderColor: theme.palette.LIGHT_GREY.main,
          }}
        >
          Images
        </Button>
        {/* buttons */}
        <Button 
          value='video' 
          onClick={selectButton}
          tabIndex={2} 
          className={classes.button} 
          sx={{
            width: '100%',
            color: alpha(theme.palette.TEXT.main, (selectedButton === 2 ? 1 : 0.5)),
            borderRadius: 0,
            border: 'none',
            borderBottom: '1px solid',
            borderColor: theme.palette.LIGHT_GREY.main,
          }}
        >
          Vidéos
        </Button>
        {/* buttons */}
        <Button 
          value='audio' 
          onClick={selectButton}
          tabIndex={3} 
          className={classes.button} 
          sx={{
            width: '100%',
            color: alpha(theme.palette.TEXT.main, (selectedButton === 3 ? 1 : 0.5)),
            borderRadius: 0,
            border: 'none',
            borderBottom: '1px solid',
            borderColor: theme.palette.LIGHT_GREY.main,
          }}
        >
          Audios
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default UserButtons;