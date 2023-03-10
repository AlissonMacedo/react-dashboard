import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

// import { Container } from './styles';

const Header = ({ title, subTitle }: { title: string, subTitle: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography 
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        sx={{ m: "0 0 15px 0" }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};
export default Header;
