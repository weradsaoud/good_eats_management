import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import HorizontalNonLinearStepper from "./Stepper";
import Chip from '@mui/material/Chip';
import { Home, ArrowRightAltTwoTone } from "@material-ui/icons";
import './wizardheader.css';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
})  // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function WizardHeader(props) {

    // console.log("props.steps: ", props.steps);
    // let steps = props.steps.map((step, index) => step.name);
    // //console.log("steps: ", steps);
    return (
        <div className='stepperDiv'>
            <HorizontalNonLinearStepper
                activeStep={props.activeStep}
                steps={props.steps}
                handleStep={props.handleStep} />
        </div>
    );
}