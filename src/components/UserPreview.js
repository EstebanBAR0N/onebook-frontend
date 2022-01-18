import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import UserImageList from './UserImageList';
import ImageModal from './ImageModal';

function UserPreview(props) {
  const theme = useTheme();

  const [url, setUrl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleImageClick(evt) {
    setUrl(evt.target.srcset);
    if (window.innerWidth >= 650) {
      setOpen(true);
    }
  }

  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{
          width: '90vw',
          height: '100%',
          borderBottom: '1px solid',
          borderColor: theme.palette.LIGHT_GREY.main
        }}>
          <Typography variant="h6" gutterBottom component="div" align="inherit" sx={{
            marginLeft: { xs: 2, md: 4 },
            marginBottom: '-3px',
            fontSize: { xs: '17px', sm: '18px', md: '21px' },
          }}
          >
            <Link to={'/user/'+props.userId} style={{
              fontFamily: 'Arsenal', 
              textDecoration: "none", 
              color: theme.palette.TEXT.main
            }}
            >
              Neb_illust
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <UserImageList onClick={handleImageClick} />
        </Box>
      </Grid>
      <ImageModal handleClose={handleClose} url={url} show={open} />
    </Grid>
  );
}

export default UserPreview;