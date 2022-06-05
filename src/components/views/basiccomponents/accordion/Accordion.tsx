import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@material-ui/icons';

export default function SimpleAccordion(props) {
    let accordions = props.data.map((item, index) => {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><strong>{item.title}</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.accordionBody}
                </AccordionDetails>
            </Accordion>
        );
    });
    return (
        <div>
            {accordions}
        </div>
    );
}