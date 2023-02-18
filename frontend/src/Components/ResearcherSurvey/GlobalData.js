import React , {useEffect, useState} from 'react'
import {VictoryPie } from 'victory'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import './index.css'
import axios from 'axios';

const GlobalData = (props) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get('/api/survey/');
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log('data :>> ', data.filter((item) =>  item.country === 'BB'));

  return (
    <div className='survey-heading'> 
    <Typography variant="h6">
      <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Global Data </Box>
    </Typography>
    <div className='survey-questions'> 
  
    </div>
  </div>
  )
}

export default GlobalData