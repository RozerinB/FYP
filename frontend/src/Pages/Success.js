import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Success = () => {
  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Usability Engineering and the importance of the level of exposure to technology </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold'}}> Thank you for your time and participation! </Box>
      </Typography>
    </div>
    </div>
  )
}

export default Success;