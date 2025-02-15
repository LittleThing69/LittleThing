import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';

const UpButton = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
      <Zoom in={trigger}>
        <Box sx={{ position: 'fixed', bottom: 24, right: 24}}>
          <Fab onClick={handleClick} sx={{  backgroundColor: '#f73378', '&:hover': { backgroundColor: '#ab003c' } }} aria-label="scroll back to top">
            <KeyboardArrowUpIcon sx={{ color: 'white' }} />
          </Fab>
        </Box>
      </Zoom>
  );
};

export default UpButton;