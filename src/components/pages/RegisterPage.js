import React, { useState } from 'react';
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
import { toast } from 'react-toastify';
import FormHelperText from '@mui/material/FormHelperText';

import BasicDatePicker from '../BasicDatePicker';
import HomeButton from '../HomeButton';
import helpers from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@material-ui/styles";


function RegisterPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  // init states
  const [fieldsInError, setFieldsInError] = useState(false);
  const [allFieldFilled, setAllFieldFilled] = useState(true);
  const [samePasswords, setSamePasswords] = useState(true);


  const [birthDate, setBirthDate] = React.useState(null);
  let fields = {};
  
  // handle birthDate
  function handleBirthDateChange(evt) {
    setBirthDate(evt);
  }
  
  // retourne Vrai si les mots de passe sont identiques
  function areSamePasswords(password, confirmPassword) {
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

    const checkFields = { 
      'username' : data.get('username'), 
      'email' : data.get('email'), 
      'password' : data.get('password'), 
      'confirmPassword' : data.get('confirmPassword'), 
    };
    
    // vérification des informations
    if (!helpers.allFieldsAreFilledIn(checkFields)) {
      setAllFieldFilled(false);
      setFieldsInError(true);
      return;
    }

    const confirmPassword = data.get('confirmPassword');
    if (!areSamePasswords(fields['password'], confirmPassword)) {
      setAllFieldFilled(true);
      setSamePasswords(false);
      setFieldsInError(true);
      return;
    }

    if (corruptedField()) {
      setAllFieldFilled(true);
      setSamePasswords(true);
      setFieldsInError(true);
      return;
    }

    setFieldsInError(false);
      
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

    // redirection sur la page d'authentification si user bien créé
    if (response.message) {
      goToAuthenticationPage();
      toast.success('Votre compte a bien été créé', {
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
    else {
      toast.error(response.error, {
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
          marginTop: { xs: 2, md: 10 },
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
                error={fieldsInError}
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirmer le mot de passe"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                error={fieldsInError}
              />
            </Grid>
            <Grid item xs={12}>
              <BasicDatePicker 
                onBirthDateChange={handleBirthDateChange} 
                birthDate={birthDate}
              />
            </Grid>
          </Grid>
          {/* form helper */}
          <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: "center", 
                width: '100%',
              }}
            >
              <FormHelperText sx={{
                display: (fieldsInError ? "flex" : "none"),
                color: theme.palette.RED.main,
              }}>
                { 
                  !allFieldFilled ? 'Des champs requis sont vides !' :
                  !samePasswords ? 'Les mots de passe saisis ne sont pas identiques !' :
                  'Adresse email ou nom d\'utilisateur déjà existants ou non conformes !'
                }
              </FormHelperText>
            </Box>
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
