import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from "@material-ui/core/styles";
// import { makeStyles } from '@mui/styles';

import '../../assets/styles/fonts.css';

// const useStyles = makeStyles({
//   media: {
//     backgroundImage: `url('https://images.assetsdelivery.com/compings_v2/julynx/julynx1408/julynx140800023.jpg')`,
//     backgroundSize: 'cover',
//   },
// })

function UserContent(props) {
  const theme = useTheme();
  // const classes = useStyles();

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
        {props.files && props.files.map((file) => (
          <ImageListItem 
            key={file.id} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '17em',
              height: '17em',
              border: '1px solid',
              borderColor: theme.palette.LIGHT_GREY.main,
              borderRadius: (file.format === 'audio' ? '30px' : 0),
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            {/* media  */}
            <CardMedia
              onClick={file.format === 'image' ? props.onClick : null}
              component={file.format === 'image' ? 'img' : file.format === 'video' ? 'video' : 'audio'} 
              controls
              image={file.url}
              alt={file.format}
              loading='lazy'
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