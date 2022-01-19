import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from "@material-ui/styles";


import '../assets/styles/fonts.css';
    

function OneBookButton() {
  const theme = useTheme();

  return (
    // web site title
    <Box container>
      <Typography sx={{ 
        fontSize: { xs: "20px", sm: "24px", md: "30px" }, 
        marginRight: { xs: "1em" },
      }}>
        <Link to="/"   style={{
          color: theme.palette.primary.main,
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