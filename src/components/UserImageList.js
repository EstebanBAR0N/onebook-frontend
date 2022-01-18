import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [1, 2, 3, 4, 5, 6, 7];

function UserImageList(props) {

  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      width: '91%',
    }}>
      <ImageList gap={100} sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '90vw', 
        height: '15em',
      }}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <Box 
              onClick={props.onClick} 
              component="img" 
              src='https://i.pinimg.com/736x/99/4b/8b/994b8b381ce52f32a3c59b7e616e8d4c--timeline-photos-easter-bunny.jpg'
              srcSet='https://i.pinimg.com/736x/99/4b/8b/994b8b381ce52f32a3c59b7e616e8d4c--timeline-photos-easter-bunny.jpg' 
              alt='image' 
              sx={{ 
                marginLeft : { xs: (image === 1 ? 5 : 0 ), md: 0 },
                marginRight : { xs: (image === images.length ? 5 : 0 ), md: 0 },
                width: '14em',
                height: '14em',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default UserImageList;