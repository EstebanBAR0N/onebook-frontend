import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  button: {
    '&:hover': {
      backgroundColor: '#DF4B45',
      color: '#212121',
    },
  },
})

function UploadArea() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Card sx={{
      width: '100%',
      height: '100%',
      borderRadius: '45px',
      backgroundColor: theme.palette.LIGHT_GREY.main,
    }}>
      <CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid red',
        }}>
          <Button
            className={classes.button}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              borderRadius: '45px',
              margin: '2em',
              // width: '50%',
              height: '3em',
            }}
          >
            Sélectionnez les fichiers à télécharger
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UploadArea;