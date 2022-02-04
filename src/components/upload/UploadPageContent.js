import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from "@material-ui/core/styles";
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import { useAuth } from "../../context/useAuth";
import MultipleFileUploadArea from './MultipleFileUploadArea';
import UploadButtons from './UploadButtons';
import { API_URL } from '../../constants';


function UploadPageContent() {
  const auth = useAuth();
  const theme = useTheme();

  // variable qui permet de savoir si on est en train d'upload
  const [uploading, setUploading] = useState(false);
  const [localStorageState, setLocalStorageState] = useState(null);

  // upload files
  const uploadFiles = async (values) => {
    setUploading(true);

    const files = values.files;
    let nbFileToUpload = files.length;
    let inSuccess = 0;
    let inError = 0;

    files.forEach(async (file) => {
      const format = file.type.split('/')[0];
      const userId = auth.user.id;

      // prepare body query
      let fields = new FormData();
      fields.append('format', format);
      fields.append('userId', userId.toString());
      fields.append('file', file);

      try {
        // envoi de la requête au serveur
        const localStorageData = window.localStorage.getItem('userData');
        const userData = JSON.parse(localStorageData);
        const token = userData.token;

        const result = await fetch(API_URL+'/api/file', {
          method: 'POST',
          headers: {
            authorization: 'Bearer ' + token
          },
          body: fields,
        });
  
        // recupération de la réponse
        const response = await result.json();

        if (response.message) {
          inSuccess += 1;
          setDeleteAll(true);
          setUploading(false);
        }
      } catch (err) {
        inError += 1;
        setDeleteAll(true);
        setUploading(false);
      }
      if (nbFileToUpload && (inError + inSuccess) === nbFileToUpload) {
        if (inError > 0) {
          let msg = '';
          if (inError === nbFileToUpload) {
            msg = "Les fichiers n'ont pas pu être téléchargés";
          }
          else {
            msg = (nbFileToUpload - inSuccess).toString() + " files in error";
          }
          toast.error(msg, {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
        else if (inSuccess === nbFileToUpload) {
          toast.success('Les données ont bien été téléchargées!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      }
    });

  };


  // handle delete all button
  const [deleteAll, setDeleteAll] = useState(false);

  const onDeleteAll = (evt) => {
    setDeleteAll(true);
  };

  const clearDeleteAll = () => {
    setDeleteAll(false);
  };


  return (
    // inner page container
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: { xs: '4em', sm: '10em', md: '10em' },
    }}>
      {/* content main container */}
      <Card sx={{
        width: '90%',
        height: '90%',
        marginTop: '3em',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: theme.palette.BG.main,
      }}>
        {/* content secondary container */}
        <CardContent>
          <Formik
            initialValues={{}}
          >
            {({ values, errors, isValid, isSubmitting }) => {
              return (
                <Form>
                  {/* upload area container */}
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Box
                      sx={{
                        width: { xs: '95%', md: '60%' },
                        borderRadius: '45px',
                        border: '2px dashed',
                        borderColor: theme.palette.TEXT.main,
                        backgroundColor: theme.palette.LIGHT_GREY.main,
                        marginBottom: '1em',
                        position: 'relative',
                      }}
                    >
                      <MultipleFileUploadArea 
                        name="files" 
                        deleteAll={deleteAll} 
                        clearDeleteAll={clearDeleteAll}
                      />
                      <Box 
                        sx={{ 
                          display: (uploading ? 'flex' : 'none'),
                          position: 'absolute',
                          margin: '0 auto',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                          left: 0,
                          top: 0,
                          borderRadius: '45px',
                          backgroundColor: alpha(theme.palette.DARK_GREY.main, 0.35),
                        }}
                      >
                        <CircularProgress size='4em' />
                      </Box>
                    </Box>
                  </Box>
                  {/* buttons container */}
                  <Box container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                  }}>
                    <UploadButtons 
                      onDeleteAll={onDeleteAll} 
                      onUploadFiles={() => uploadFiles(values)} 
                    />
                  </Box>
                </Form>
              )
            }}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UploadPageContent;