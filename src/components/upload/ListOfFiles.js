import React, {memo} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';


function ListOfFiles(props) {

  return (
    // list of file main container
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '91%',
    }}>
      {/* images container */}
      <ImageList gap={100} sx={{
        display: 'flex',
        justifyContent: 'start',
        width: '90vw',
        height: { xs: '10em', sm: '13em', md: '15em' },
      }}>
        {props.files.map((file, index) => {
          const file_type = file?.type.split('/')[0];
          
          console.log('files: ', props.files)
          console.log('file_type: ', file_type)

          return (
            <ImageListItem key={index.toString()+file.name}>
              {/* image */}
              <Card>
                <Box sx={{
                  display: (file_type === 'audio' ? 'flex' : 'none'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  // height: '100%',
                  width: { xs: '9em', sm: '12em', md: '14em' },
                  height: { xs: '9em', sm: '12em', md: '14em' },
                }}>
                  <Typography
                    style={{ wordWrap: "break-word" }}
                    gutterBottom
                    variant="h4"
                    component="h4"
                    sx={{ 
                      width: '100%',
                      textAlign: 'center',
                      fontSize: {xs: '15px', md: '22px'},
                    }}
                  >
                    {file?.name}
                  </Typography>
                </Box>
                <CardMedia
                  component={file_type === 'image' ? "img" : file_type}
                  image={URL.createObjectURL(file)}
                  alt='file'
                  sx={{
                    width: { xs: '9em', sm: '12em', md: '14em' },
                    height: { xs: '9em', sm: '12em', md: '14em' },
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </ImageListItem>
          )})
        }
      </ImageList>
    </Box>
  );
}

export default memo(ListOfFiles);