import React from 'react';
import Header from '../../components/header';
import BarChart from '../../components/BarChart';
import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle='Simple Bar Chart' />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};
export default Pie;
