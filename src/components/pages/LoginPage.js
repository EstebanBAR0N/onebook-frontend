import { useTheme } from '@material-ui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import { useAuth } from '../../context/useAuth';
import helpers from '../../utils/helpers';
import HomeButton from '../HomeButton';


function LoginPage(props) {
  // init states
  const [fieldsInError, setFieldsInError] = useState(false);
  const auth = useAuth();
  const theme = useTheme();
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
      'email': data.get('email'),
      'password': data.get('password'),
    };

    // vérification des informations
    if (!helpers.allFieldsAreFilledIn(fields)) {
      setFieldsInError(true);
      return;
    }

    if (corruptedField()) {
      setFieldsInError(true);
      return;
    }

    // envoi de la requête au serveur
    const result = await fetch(API_URL+'/api/login', {
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
    else {
      toast.error(userData.error || 'Server error', {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    // main container
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <CssBaseline />

      {/* back to home button */}
      <HomeButton />

      {/* content container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
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
                error={fieldsInError}
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
                error={fieldsInError}
              />
            </Grid>
          </Grid>
          {/* form helper */}
          <FormHelperText sx={{
            display: (fieldsInError ? "flex" : "none"),
            color: theme.palette.RED.main,
          }}>
            Adresse email ou mot de passe incorrect !
          </FormHelperText>
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
