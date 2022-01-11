import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';

function HomeButton() {
  return (
    <Box>
      <Link href="/" variant="body2" style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        height: '3em',
      }}>
        <HomeIcon /><span style={{ marginTop: "4px" }}>Home</span>
      </Link>
    </Box>
  );
}

export default HomeButton;