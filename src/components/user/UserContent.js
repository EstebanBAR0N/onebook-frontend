import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import '../../assets/styles/fonts.css';

function UserContent(props) {

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
      {/* no data found */}
      <Box sx={{
        display: (props.files.length === 0 ? 'flex' : 'none'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 'calc(50% - 10em)',
        top: 'calc(50% + 5em)',
        width: '20em',
        height: '10em',
      }}>
        <Typography sx={{
          fontSize: {xs: '16px', md: '20px'},
        }}>
          Aucune donnée trouvé.
        </Typography>
      </Box>
      {/* image list */}
      <ImageList cols={4} sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%',
        height: '100%',
      }}
        gap={100}
      >
        {/* image container */}
        {props.files && props.files.map((file) => {

          // get name of file by url
          const url = file.url.split('/');
          let file_name = url[url.length - 1].split('.').slice(0, -1).join(' ');
          file_name = file_name.split('__')[1] || 'Fichier audio';

          return (
            <ImageListItem
              key={file.id} 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '17em',
                height: '17em',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* media  */}
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: (file.format === 'audio' ? '30px' : 0),
                marginBottom: '10px',
                width: '17em',
                height: '17em',
                objectFit: 'cover',
              }}>
                <Box sx={{
                  display:(file.format === 'audio' ? 'flex' : 'none'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>
                  <Typography
                    style={{ wordWrap: "break-word" }}
                    gutterBottom
                    variant="h5"
                    component="h5"
                    sx={{ 
                      marginTop: '1em', 
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    {file_name}
                  </Typography>
                </Box>
                <CardMedia
                  onClick={file.format === 'image' ? props.onClick : null}
                  component={file.format === 'image' ? 'img' : file.format} 
                  controls
                  image={file.url}
                  alt={file.format}
                  loading='lazy'
                  sx={{
                    width: '17em',
                    height: (file.format === 'audio' ? '4em' : '17em'),
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </ImageListItem>
          )
        })}
      </ImageList>
    </Box>
  );
}

export default UserContent;