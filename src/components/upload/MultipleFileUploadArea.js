import React, { useCallback, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, } from "@material-ui/core/styles";
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

import ListOfFiles from './ListOfFiles';



function MultipleFileUploadArea({ name }) {
  const theme = useTheme();

  const [_, __, helpers] = useField(name);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    // const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    // upload zone container
    <React.Fragment>
      <Box container sx={{
        width: '100%',
        height: '100%',
        margin: 1,
      }}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />

          {/* drag and drop container */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '3em', md: '2em' },
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                borderRadius: '45px',
                margin: '2em',
                height: { xs: '3.5em', md: '3em' },
              }}
            >
              Sélectionnez les fichiers à télécharger
            </Button>
            <Typography sx={{
              display: { xs: 'none', md: 'flex' },
              color: theme.palette.DARK_GREY.main,
            }}>
              ou glissez-déposez ici
            </Typography>
          </Box>

          {/* list of files uploaded */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            marginTop: '3em',
          }}>
            <ListOfFiles files={files} />
          </Box>

          {/* debug  */}
          {/* {JSON.stringify(files)} */}
        </div>
      </Box>
    </React.Fragment>
  );
}


export default MultipleFileUploadArea;