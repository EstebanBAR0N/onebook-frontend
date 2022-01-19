import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';


function MobileMenuPage() {
  const theme = useTheme();

  // temp variables
  let userConnected = true;
  let userId = 1;

  return (
    // main container
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontFamily: 'Hammersmith One',
      overflow: 'hidden',
    }}>
      {/* page content structure */}
      <Grid container sx={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1px 1fr 1fr 5fr',
        alignItems: 'center',
        height: '100%'
      }}>
        {/* main button */}
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
        {/* main button */}
        <Grid item sx={{
          display: 'flex',
          justifyContent: 'start',
          marginLeft: '3em',
          marginBottom: '3em',
        }}>
          <Link to={'/user/' + userId} style={{ color: 'white', fontSize: '35px', textDecoration: "none" }}>
            Mon book
          </Link>
        </Grid>

        {/* dash */}
        <Grid item sx={{
          width: '1.3em',
          marginLeft: '3em',
          borderBottom: '1px solid white',
        }}></Grid>

        {/* secondary button */}
        <Grid item sx={{
          display: 'flex',
          justifyContent: 'start',
          marginLeft: '3em',
          marginTop: '3em',
          marginBottom: '1em',
        }}>
          <Link to="" style={{ color: 'white', fontSize: '25px', textDecoration: "none" }}>
            Profil
          </Link>
        </Grid>
        {/* secondary buttons */}
        <Grid item sx={{
          display: 'flex',
          justifyContent: 'start',
          marginLeft: '3em',
          marginBottom: '1.5em',
        }}>
          {/* if user not connected */}
          <Link to="/login" style={{
            display: (!userConnected ? 'flex' : 'none'),
            color: 'white',
            fontSize: '25px',
            textDecoration: "none"
          }}>
            Se connecter
          </Link>
          {/* if user connected */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}>
            <Link to="/account/upload" style={{
              display: (userConnected ? 'flex' : 'none'),
              color: 'white',
              fontSize: '25px',
              textDecoration: "none",
              marginBottom: '0.7em',
            }}>
              Ajouter du contenu
            </Link>
            <Link to="/" style={{
              display: (userConnected ? 'flex' : 'none'),
              color: 'white',
              fontSize: '25px',
              textDecoration: "none"
            }}>
              Déconnexion
            </Link>
          </Box>
        </Grid>
        
        {/* title */}
        <Grid item sx={{
          color: 'white',
          fontSize: '50px',
          position: 'absolute',
          bottom: 0,
          left: 0,
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
