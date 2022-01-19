import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import '../assets/styles/fonts.css';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35em',
  height: '35em',
  bgcolor: 'background.paper',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  border: '2px solid #000',
  boxShadow: 24,
};

function ImageModal(props) {
  return (
    // main container
    <Modal
      open={props.show}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* modale content */}
      <Box sx={style}>
        {/* close button */}
        <Box onClick={props.handleClose} sx={{ width: '100%', marginTop: 1 }}>
          <Button sx={{ borderRadius: '5px' }}>
            <CloseIcon />
          </Button>
        </Box>
        {/* image container */}
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: '90%',
          margin: 3,
          marginTop: 0.5,
        }}>
          {/* image */}
          <Box
            component="img"
            src={props.url}
            srcSet={props.url}
            loading="lazy"
            sx={{
              width: '29em',
              height: '29em',
              objectFit: 'cover',
            }}
            />
        </Box>
      </Box>
    </Modal>
  );
}

export default ImageModal;