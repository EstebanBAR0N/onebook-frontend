import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../assets/styles/fonts.css';

function OneBookButton() {
  const theme = useTheme();

  return (
    <Box container>
      <Typography sx={{ 
        fontSize: { xs: "20px", sm: "24px", md: "30px" }, 
        marginRight: { xs: "1em" },
        color: theme.palette.primary.main 
      }}>
        <Link to="/" style={{ fontFamily: 'Hammersmith One', textDecoration: "none" }}>
          OneBook
        </Link>
      </Typography>
    </Box>
  );
}

export default OneBookButton;