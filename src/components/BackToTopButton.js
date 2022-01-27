import React, { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const BackToTopButton = () => {

  const [visible, setVisible] = useState(false);

  // display the back to top button when scroll > 300
  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => { 
      window.removeEventListener('scroll', toggleVisible); 
    };
  }, [toggleVisible]);

  return (
    // icon container
    <Button sx={{
      position: 'fixed',
      bottom: '1em',
      right: 0,
      zIndex: 2,
      borderRadius: 5,
    }}>
      {/* icon */}
      <ArrowUpwardIcon
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
        sx={{ width: { sx: 20, sm: 30, md: 40 }, height: 30 }}
      />
    </Button>
  );
}

export default BackToTopButton;