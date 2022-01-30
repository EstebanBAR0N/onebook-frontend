import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from "@material-ui/core/styles";
import { Form, Formik } from 'formik';

import { useAuth } from "../../context/useAuth";
import MultipleFileUploadArea from './MultipleFileUploadArea';
import UploadButtons from './UploadButtons';


function UploadPageContent() {
  const auth = useAuth();
  const theme = useTheme();

  // upload files
  const uploadFiles = async (values) => {
    const files = values.files;

    files.forEach(async (file) => {
      const format = file.type.split('/')[0];
      const userId = auth.user.id;

      // prepare body query
      let fields = new FormData();
      fields.append('format', format);
      fields.append('userId', userId.toString());
      fields.append('file', file);

      // envoi de la requête au serveur
      const result = await fetch('http://localhost:4000/api/file', {
        method: 'POST',
        body: fields,
      });

      // recupération de la réponse
      const response = await result.json();

      // redirection sur la page d'authentification si user bien créé
      if (response.message) {
        window.location.reload();
      }
      else {
        alert("Error", response.error);
        return;
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
                      }}
                    >
                      <MultipleFileUploadArea 
                        name="files" 
                        deleteAll={deleteAll} 
                        clearDeleteAll={clearDeleteAll}
                      />
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
            }
            }
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UploadPageContent;