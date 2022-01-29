import React, {useEffect, memo} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { useTheme } from "@material-ui/styles";


function SingleFileUpload(props) {
  const theme = useTheme();

  const file_type = props.file?.type.split('/')[0];

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