import React, { useState, useEffect, memo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import useFetch from "../../context/useFetch";
import { API_URL } from '../../constants';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  imageStyle: {
    '&:hover': {
      cursor: 'pointer',
  },
}});


function UserImageList(props) {
  const classes = useStyles();

  // fetch quelques les X premieres images du user pour avoir un apercu de ses travaux
  const limit = 10;
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let newURL = API_URL+'/api/file?limit='
      + limit
      + '&offset=0'
      + '&userId='
      + props.userId;

    setUrl(newURL);

    return () => { newURL = null; };
  }, []);


  let { data: files } = useFetch(url, false);


  return (
    // horizontal user image list
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '91%',
    }}>
      {/* no data found */}
      <Box sx={{
        display: (files.length === 0 ? 'flex' : 'none'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 'calc(50% - 10em)',
        top: 'calc(50% - 10em)',
        width: '20em',
        height: '20em',
      }}>
        <Typography sx={{
          fontSize: {xs: '16px', md: '20px'},
        }}>
          Aucune donnée trouvée.
        </Typography>
      </Box>
      {/* image list container */}
      <ImageList gap={100} sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '90vw',
        height: '16em',
      }}>
        {/* files */}
        {files && files.map((file) => {

          const file_type = file?.format;
          let file_name = file.url[file.url.length - 1].split('.').slice(0, -1).join(' ');
          file_name = file_name.split('__')[1] || 'Fichier audio';

          return (
            <ImageListItem key={file.id}>
              {/* media  */}
              <Card className={file_type === 'image' ? classes.imageStyle : ''}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: (file_type === 'audio' ? '20px' : 0),
                  marginBottom: '10px',
                  width: '14em',
                  height: '14em',
                  marginLeft: { xs: (file.id === files[0].id ? 5.4 : 0), md: 0 },
                  marginRight: { xs: (file.id === files[files.length - 1].id ? 5.4 : 0), md: 0 },
                  objectFit: 'cover',
                }}
              >
                {/* text for audio media */}
                <Box sx={{
                  display:(file_type === 'audio' ? 'flex' : 'none'),
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
                {/* file */}
                <CardMedia
                  onClick={file_type === 'image' ? props.onClick : null}
                  component={file_type === 'image' ? 'img' : file_type} 
                  controls
                  image={file.url}
                  alt={file_type}
                  loading='lazy'
                  sx={{
                    width: '14em',
                    height: (file_type === 'audio' ? '3em' : '14em'),
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </ImageListItem>
          )}
        )}
      </ImageList>
    </Box>
  );
}

export default memo(UserImageList);