import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from "@material-ui/core/styles";
import { Form, Formik } from 'formik';

import MultipleFileUploadArea from './MultipleFileUploadArea';
import UploadButtons from './UploadButtons';


function UploadPageContent() {
  const theme = useTheme();

  // handle delete all button
  const [deleteAll, setDeleteAll] = useState(false);

  const onDeleteAll = (evt) => {
    setDeleteAll(true);
  }

  const clearDeleteAll = () => {
    setDeleteAll(false);
  }

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
            onSubmit={() => { }}
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
                    <UploadButtons onDeleteAll={onDeleteAll} />
                  </Box>

                  {/* debug */}
                  {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
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