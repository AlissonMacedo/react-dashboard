import React from 'react';
import Header from '../../components/header';
import BarChart from '../../components/BarChart';
import { Box } from '@mui/material';

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle='Simple Bar Chart' />
      <Box height="75vh">
        <BarChart isDashboard={undefined} />
      </Box>
    </Box>
  );
};
export default Bar;
