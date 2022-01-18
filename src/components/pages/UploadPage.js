import React from 'react';
import Box from '@mui/material/Box';

import Navbar from '../Navbar';
// import UploadPageContent from '../upload/UploadPageContent';
import UploadPageContent from '../upload/UploadPageContent';


function UploadPage() {
  return (
    <Box>
      <Navbar />
      <UploadPageContent />
    </Box>
  );
}

export default UploadPage;
