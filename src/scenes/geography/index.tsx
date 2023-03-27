import Header from '../../components/header';
import { Box } from '@mui/material';

import GeographyChart from '../../components/GeographyChart';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Graphy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle='Simple Line Chart' />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart />
      </Box>
    </Box>
  );
};
export default Graphy;
