import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';

import '../assets/styles/fonts.css';

const itemData = [
  {
    img: 'https://i.pinimg.com/736x/99/4b/8b/994b8b381ce52f32a3c59b7e616e8d4c--timeline-photos-easter-bunny.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://www.la-copine.org/wp-content/uploads/2017/10/cuisiner-reste-patate-recette-antigaspi.jpg',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const useStyles = makeStyles({
  media: {
    backgroundImage: `url('https://images.assetsdelivery.com/compings_v2/julynx/julynx1408/julynx140800023.jpg')`,
    backgroundSize: 'cover',
  },
})

const imageLoaded = true;

function UserContent(props) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    // main container
    <Box container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      marginTop: '2em',
    }}>
      {/* image list */}
      <ImageList sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%',
        height: '100%',
      }}
        gap={100}
      >
        {/* image container */}
        {itemData.map((item) => (
          <ImageListItem 
            className={(!imageLoaded ? classes.media : '')} 
            key={item.img} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '17em',
              height: '17em',
              border: '1px solid',
              borderColor: theme.palette.LIGHT_GREY.main,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            {/* image  */}
            <Box
              onClick={props.onClick}
              component="img"
              src={`https://images.assetsdelivery.com/compings_v2/julynx/julynx1408/julynx140800023.jpg`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
              sx={{
                width: '17em',
                height: '17em',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default UserContent;