import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../assets/styles/fonts.css';
    
function OneBookButton() {
  return (
    // web site title
    <Box container>
      <Typography sx={{ 
        fontSize: { xs: "20px", sm: "24px", md: "30px" }, 
        marginRight: { xs: "1em" },
      }}>
        <Link to="/" style={{
          fontFamily: 'Hammersmith One', 
          textDecoration: "none", 
        }}
        >
          OneBook
        </Link>
      </Typography>
    </Box>
  );
}

export default OneBookButton;