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

import BasicDatePicker from '../BasicDatePicker';
import HomeButton from '../HomeButton';
import helpers from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
  // init states
  const navigate = useNavigate();

  const [birthDate, setBirthDate] = React.useState(null);
  let fields = {};
  
  // handle birthDate
  function handleBirthDateChange(evt) {
    setBirthDate(evt);
  }
  
  // retourne Vrai si les mots de passe sont identiques
  function samePasswords(password, confirmPassword) {
    return password === confirmPassword;
  }
  
  // retourne vrai si les données ne sont pas conformes
  function corruptedField() {
    if (
      !isNaN(fields['username']) || 
      fields['username'].length < 3 ||
      !helpers.isValidEmail(fields['email'])
    ) {
      return true;
    }
    return false;
  }

  // redirection sur la page login
  function goToAuthenticationPage() {
    navigate('/login');
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dateObj = new Date(birthDate);
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const date = year + "-" + month + "-" + day;

    // set Fields
    fields = { 
      'username' : data.get('username'), 
      'email' : data.get('email'), 
      'password' : data.get('password'), 
      'birthDate' : (date || null), 
    };

    // vérification des informations
    if (!helpers.allFieldsAreFilledIn(fields)) {
      alert('Un ou plusieurs champ(s) requis sont vide(s) !');
      return;
    }

    const confirmPassword = data.get('confirmPassword');
    if (!samePasswords(fields['password'], confirmPassword)) {
      alert('Les mots de passe sont différents !');
      return;
    }

    if (corruptedField()) {
      let msg = 'Le nom d\'utilisateur et/ou l\'adresse mail ne sont pas conformes !';
      msg += '\n';
      msg += 'Nom utilisateur : au moins 3 caractères.';
      alert(msg);
      return;
    }
      
    // envoi de la requête au serveur
    const result = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(fields),
    });

    // recupération de la réponse
    const response = await result.json();
    console.log(response.message);

    // redirection sur la page d'authentification si user bien créé
    if (response.message) {
      goToAuthenticationPage();
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
          Inscrivez-vous
        </Typography>
        {/* form container */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Nom d'utilisateur"
                autoFocus
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirmer le mot de passe"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <BasicDatePicker onBirthDateChange={handleBirthDateChange} birthDate={birthDate} />
            </Grid>
          </Grid>
          {/* submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 45 }}
          >
            Créer un compte
          </Button>
          {/* go to login page button */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Déjà un compte? Se connecter
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPage;
