import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import React from "react";

const AccordionComponent = ({ aSummary, aDetails }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {aSummary}{" "}
      </AccordionSummary>
      <AccordionDetails>{aDetails}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
