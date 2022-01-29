import React, {useEffect, memo} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { useTheme } from "@material-ui/styles";


async function uploadFile(file) {
  const url = 'https://api.cloudinary.com/v1_1/:cloud_name/:action';
  const key = 'upload_preset_key';

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
  
    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', key);
    
    xhr.send(data);
  });
}


function SingleFileUpload(props) {
  const theme = useTheme();

  const file_type = props.file?.type.split('/')[0];

  useEffect(() => {
    async function upload() {
      const url = await uploadFile( props.file);
      console.log('result : ', url);
      // onUpload(file, url);
    }

    upload();
  }, [props.file]);

  return (
    <Card>
      <DeleteIcon 
        onClick={() => {props.onDelete(props.file);}} 
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
          {props.file?.name}
        </Typography>
      </Box>
      <CardMedia
        component={file_type === 'image' ? "img" : file_type}
        image={URL.createObjectURL(props.file)}
        alt='file'
        sx={{
          width: { xs: '9em', sm: '12em', md: '14em' },
          height: { xs: '9em', sm: '12em', md: '14em' },
          objectFit: 'cover',
        }}
      />
    </Card>
  );
}

export default memo(SingleFileUpload);