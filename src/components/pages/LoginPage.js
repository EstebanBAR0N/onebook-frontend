import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import HomeButton from '../HomeButton';
import helpers from '../../utils/helpers';
import { useAuth } from "../../context/useAuth";
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  // init states and variables
  const auth = useAuth();
  const navigate = useNavigate();
  let fields = {};
  
  // retourne vrai si les données ne sont pas conformes
  function corruptedField() {
    if (
      !helpers.isValidEmail(fields['email'])
    ) {
      return true;
    }
    return false;
  }

  // redirection sur la page d'accueil
  function goToHomePage() {
    navigate('/');
  };

  // handlle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // set Fields
    fields = { 
      'email' : data.get('email'), 
      'password' : data.get('password'),
    };

    // vérification des informations
    if (!helpers.allFieldsAreFilledIn(fields)) {
      alert('Un ou plusieurs champ(s) requis sont vide(s) !');
      return;
    }

    if (corruptedField()) {
      let msg = 'L\'adresse mail n\'est pas conformes !';
      alert(msg);
    }
      
    // envoi de la requête au serveur
    const result = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(fields),
    });

    // recupération de la réponse
    const userData = await result.json();

    // redirection sur homePage si user bien créé
    if (userData.userId) {
      // mise à jour du local storage => maj du contexte user
      auth.login(userData);

      goToHomePage();
    }
  };

  return (
    // main container
    <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
      <CssBaseline />
      
      {/* back to home button */}
      <HomeButton />

      {/* content container */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* lockout icon */}
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        {/* title */}
        <Typography component="h1" variant="h5">
          Connectez-vous
        </Typography>
        {/* form container */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Adresse mail"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          {/* submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 45 }}
          >
            Se connecter
          </Button>
          {/* go to register page button */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Pas de compte? Créer un compte
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
