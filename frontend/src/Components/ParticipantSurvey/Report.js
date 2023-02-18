import React from 'react'
import {VictoryPie } from 'victory'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import './Survey.css'
import axios from 'axios';

const Report = (props) => {
    const {
        formField: {
            client_id
        }
      } = props;
      console.log('client_id :>> ', props);
    const res =  axios.get(`/api/survey`);
    console.log('res :>> ', res);

  return (
    <div className='survey-heading'> 
    <Typography variant="h6">
    <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Report </Box>
  </Typography>
    <div className='survey-questions'> 
  
    </div>
  </div>
  )
}

export default Report