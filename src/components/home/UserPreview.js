import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import UserImageList from './UserImageList';
import ImageModal from '../ImageModal';

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

  // scroll back to top when we change page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    // user preview (username and his image list)
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
        <Box sx={{
          width: '90vw',
          height: '100%',
          borderBottom: '1px solid',
          borderColor: theme.palette.LIGHT_GREY.main
        }}>
          {/* username */}
          <Typography variant="h6" gutterBottom component="div" align="inherit" 
            sx={{
              marginLeft: { xs: 2, md: 4 },
              marginBottom: '-3px',
              fontSize: { xs: '17px', sm: '18px', md: '21px' },
            }}
          >
            <Link to={'/user/'+props.userId} onClick={scrollToTop} style={{
              fontFamily: 'Arsenal', 
              textDecoration: "none", 
              color: theme.palette.TEXT.main
            }}
            >
              {props.username}
            </Link>
          </Typography>
        </Box>
      </Grid>
      {/* image list container */}
      <Grid item xs={12}>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100%', 
            height: '100%',
            marginTop: '10px',
          }}
        >
          <UserImageList onClick={handleImageClick} userId={props.userId} />
        </Box>
      </Grid>
      <ImageModal handleClose={handleClose} url={url} show={open} />
    </Grid>
  );
}

export default UserPreview;