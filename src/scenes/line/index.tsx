import React from 'react';
import Header from '../../components/header';
import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';
import LineChart from '../../components/Line';

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle='Simple Line Chart' />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};
export default Line;
