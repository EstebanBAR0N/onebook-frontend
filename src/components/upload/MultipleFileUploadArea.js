import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from "@material-ui/core/styles";
// import { makeStyles } from '@material-ui/core';
// import { useField } from 'formik';
// FileError, FileRejection,
import { useDropzone } from 'react-dropzone';
// import { SingleFileUploadWithProgress } from './SingleFileUploadWithProgress';
// import { UploadError } from './UploadError';

import ListOfFiles from './ListOfFiles';


// let currentId = 0;

// function getNewId() {
//   // we could use a fancier solution instead of a sequential ID :)
//   return ++currentId;
// }

// export interface UploadableFile {
//   // id was added after the video being released to fix a bug
//   // Video with the bug -> https://youtube-2021-feb-multiple-file-upload-formik-bmvantunes.vercel.app/bug-report-SMC-Alpha-thank-you.mov
//   // Thank you for the bug report SMC Alpha - https://www.youtube.com/channel/UC9C4AlREWdLoKbiLNiZ7XEA
//   id: number;
//   file: File;
//   errors: FileError[];
//   url?: string;
// }

function MultipleFileUploadArea({ name }) {
  const theme = useTheme();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    // const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
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
            marginTop: '2em',
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

          {/* {JSON.stringify(files)} */}
        </div>
      </Box>
    </React.Fragment>
  );
}


export default MultipleFileUploadArea;