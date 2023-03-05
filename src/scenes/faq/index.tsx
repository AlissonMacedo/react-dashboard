

import { Box, colors, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (

    <Box m="20px">
    <Header title="FAQ" subTitle="Frequently Questions Page" />
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography >
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
        Your favorite Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography >
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Some Random Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography >
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book
        </Typography>
      </AccordionDetails>
    </Accordion>
    </Box>
  );
};
export default Faq;
