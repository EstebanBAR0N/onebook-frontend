import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';


function MobileMenuPage() {
  const theme = useTheme();

  // temp variables
  let userConnected = false;
  let userId = 1;

  return (
    <Box sx={{ 
      width: '100vw', 
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontFamily: 'Hammersmith One', 
      overflow: 'hidden',
    }}>
      <Grid container sx={{ 
        display: 'grid', 
        gridTemplateRows: '1fr 1fr 1px 1fr 1fr 5fr',
        alignItems: 'center',
        height: '100%'
      }}>
        <Grid item sx={{ 
          display: 'flex', 
          justifyContent: 'start',  
          marginLeft: '3em', 
          marginTop: '3em',
          marginBottom: '1.5em',
        }}>
          <Link to="/" style={{ color: 'white', fontSize: '35px', textDecoration: "none" }}>
            Accueil
          </Link>
        </Grid>
        <Grid item sx={{ 
          display: 'flex', 
          justifyContent: 'start',  
          marginLeft: '3em', 
          marginBottom: '3em',
        }}>
          <Link to={'/user/'+userId} style={{ color: 'white', fontSize: '35px', textDecoration: "none" }}>
            Mon book
          </Link>
        </Grid>

        <Grid item sx={{ 
          width: '1.3em',
          marginLeft: '3em',
          borderBottom: '1px solid white',
        }}></Grid>

        <Grid item sx={{ 
            display: 'flex', 
            justifyContent: 'start',  
            marginLeft: '3em',
            marginTop: '3em',
            marginBottom: '0.5em',
        }}>
          <Link to="" style={{ color: 'white', fontSize: '25px', textDecoration: "none" }}>
            Profil
          </Link>
        </Grid>
        <Grid item sx={{ 
          display: 'flex', 
          justifyContent: 'start', 
          marginLeft: '3em', 
        }}>
          <Link to="/login" style={{
            display: (!userConnected ? 'flex' : 'none'),
            color: 'white', 
            fontSize: '25px', 
            textDecoration: "none" 
          }}>
            Se connecter
          </Link>
          <Link to="/" style={{ 
            display: (userConnected ? 'flex' : 'none'),
            color: 'white', 
            fontSize: '25px', 
            textDecoration: "none" 
          }}>
            Déconnexion
          </Link>
        </Grid>

        <Grid item sx={{
          color: 'white', 
          fontSize: '50px',
          position:'absolute',                
          bottom:0,                         
          left:0, 
          marginLeft: '1em',
          marginBottom: '1em',
        }}>
          OneBook
        </Grid>
      </Grid>
    </Box>
  );
}

export default MobileMenuPage;
