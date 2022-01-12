import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [1, 2, 3, 4, 5, 6, 7];

const url = "../assets/images/";

function UserImageList() {
  return (
    <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <ImageList gap={100} sx={{ border: '1px solid black', display: 'flex', justifyContent: 'space-between', width: '90vw' , height: '15em'}}>
        {images.map((image) => (
          <ImageListItem key={image}>
            <Box
              component="img"
              src={`${url+image}.jpg`}
              alt='image'
              sx={{ height: '100%', width: 'auto', border: '1px solid red' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default UserImageList;