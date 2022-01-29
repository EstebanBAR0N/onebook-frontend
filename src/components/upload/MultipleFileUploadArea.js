import React, { useCallback, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, } from "@material-ui/core/styles";
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

import ListOfFiles from './ListOfFiles';



function MultipleFileUploadArea(props) {
  const theme = useTheme();

  
  // init states
  const [_, __, helpers] = useField(props.name);
  const [files, setFiles] = useState([]);


  // handle on drop
  const onDrop = useCallback((accFiles, rejFiles) => {
    if (rejFiles.length > 0) {
      let msg = 'Erreur, les fichiers que vous essayez de télécharger ne sont pas conformes.\n';
      msg += 'Taille maximum d\'un fichier : 3.5MB.\n';
      msg += 'Formats acceptés : image, vidéo et audio.';
      alert(msg);
    }

    const mappedAcc = accFiles.map((file) => (file));
    setFiles((curr) => [...curr, ...mappedAcc]);
  }, []);


  // handle delete all files event
  useEffect(() => {
    if (props.deleteAll) {
      setFiles([]);
      props.clearDeleteAll();
    }

  }, [props.deleteAll]);


  // faire remonter les 'files' au composant parent
  useEffect(() => {
    helpers.setValue(files);
  }, [files]);


  // dropZone config
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*', 'video/*', 'audio/*'],
    maxSize: 3500 * 1024, // 3.5MB
  });


  // fonctions onDelete, onUpload
  // Pour supprimer ou donner les urls cloudinary au composant parent
  function onDelete(file) {
    setFiles((curr) => curr.filter((f) => f !== file));
  }

  function onUpload(file, url) {
    setFiles((curr) =>
      curr.map((f) => {
        if (f === file) {
          return { f, url };
        }
        return f;
      })
    );
  }


  return (
    // upload zone container
    <React.Fragment>
      <Box container sx={{
        width: '100%',
        height: '100%',
        margin: 1,
      }}>
        <div {...getRootProps()}>
          <input type='file' {...getInputProps()} />

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
        </div>
        {/* list of files uploaded */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          marginTop: '3em',
        }}>
          <ListOfFiles onDelete={onDelete} onUpload={onUpload} files={files} />
        </Box>
      </Box>
    </React.Fragment>
  );
}


export default MultipleFileUploadArea;