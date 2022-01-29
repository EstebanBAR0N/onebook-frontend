import React, {memo} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { useTheme } from "@material-ui/styles";


function ListOfFiles(props) {
  const theme = useTheme();

  const deleteFile = (file) => {
    props.onDelete(file);
  }

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
        alignItems: 'center',
        width: '90vw',
        height: { xs: '10em', sm: '15em', md: '17em' },
      }}>
        {props.files.map((file, index) => {
          const file_type = file?.type.split('/')[0];
          
          console.log('files: ', props.files)
          console.log('file_type: ', file_type)

          return (
            <ImageListItem key={index.toString()+file.name}>
              {/* image */}
              <Card>
                <DeleteIcon 
                  onClick={() => {deleteFile(file);}} 
                  sx={{
                    color: theme.palette.RED.main,
                    position: 'absolute',
                    right: {xs: -12, sm: -14, md: -15},
                    top: {xs: -12, sm: -14, md: -15},
                    width: {xs: '1.5em', sm: '1.8em', md: '2em'},
                    height: {xs: '1.5em', sm: '1.8em', md: '2em'},
                  }}
                />
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