import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function ListOfFiles(props) {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '91%',
    }}>
      <ImageList gap={100} sx={{
        display: 'flex',
        justifyContent: 'start',
        width: '90vw',
        height: { xs: '10em', sm: '13em', md: '15em' },
      }}>
        {props.files.map((file, idx) => (
          <ImageListItem key={idx}>
            <Box
              component="img"
              src='https://i.pinimg.com/736x/99/4b/8b/994b8b381ce52f32a3c59b7e616e8d4c--timeline-photos-easter-bunny.jpg'
              srcSet='https://i.pinimg.com/736x/99/4b/8b/994b8b381ce52f32a3c59b7e616e8d4c--timeline-photos-easter-bunny.jpg'
              alt='file'
              sx={{
                width: { xs: '9em', sm: '12em', md: '14em' },
                height: { xs: '9em', sm: '12em', md: '14em' },
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ListOfFiles;