import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useAuth } from "../../context/useAuth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function MobileMenuPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();


  const deconnexion = () => {
    // déconnecter le user
    auth.logout();

    // redirection sur l'accueil
    navigate('/');
  };


  const goToMyBook = () => {
    if (auth.user.id) {
      navigate('/user/' + auth.user.id);
    }
  };


  const goToProfil = () => {
    // notif page en cours de création
    toast.warning('Cette page est en cours de création', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };


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
          display: (auth.user.id ? 'flex' : 'none'),
          justifyContent: 'start',
          marginLeft: '3em',
          marginBottom: '3em',
        }}>
          <Link onClick={goToMyBook} to={'/user/' + auth.user.id} style={{ color: 'white', fontSize: '35px', textDecoration: "none" }}>
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
          display: (auth.user.id ? 'flex' : 'none'),
          justifyContent: 'start',
          marginLeft: '3em',
          marginTop: '3em',
          marginBottom: '1em',
        }}>
          <Link onClick={goToProfil} to="" style={{ color: 'white', fontSize: '25px', textDecoration: "none" }}>
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
            display: (!auth.user.id ? 'flex' : 'none'),
            color: 'white',
            fontSize: '25px',
            textDecoration: "none",
            marginTop: "3em",
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
              display: (auth.user.id ? 'flex' : 'none'),
              color: 'white',
              fontSize: '25px',
              textDecoration: "none",
              marginBottom: '0.7em',
            }}>
              Ajouter du contenu
            </Link>
            <Link onClick={deconnexion} to="/" style={{
              display: (auth.user.id ? 'flex' : 'none'),
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
