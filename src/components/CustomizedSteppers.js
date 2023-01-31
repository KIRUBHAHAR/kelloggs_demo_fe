import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';

// Stepper Icons
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import HailRoundedIcon from '@mui/icons-material/HailRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { Box, Card, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { SET_STEPPER_INCREMENT, SET_STEPPER_DECREMENT, SET_STEPPER_SUBMIT } from 'store/types';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4'
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor'
    }
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
        }
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
        }
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1
    }
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    }),
    ...(ownerState.completed && {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
    })
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <BiotechRoundedIcon />,
        2: <PrecisionManufacturingRoundedIcon />,
        3: <HailRoundedIcon />,
        4: <ProductionQuantityLimitsRoundedIcon />,
        5: <LocalGroceryStoreRoundedIcon />,
        6: <SummarizeRoundedIcon />
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node
};

const steps = ['Select Account Category', 'PPGX C', 'Finance & HR', 'Production', 'Marketing', 'Summary'];

export default function CustomizedSteppers() {
    const dispatch = useDispatch();
    const department_store = useSelector((state) => state.department);

    return (
        <Card sx={{ marginBottom: 2 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={1} justifyContent="center" alignItems="center">
                    <Button
                        sx={{ borderRadius: 8 }}
                        variant="contained"
                        onClick={() => dispatch({ type: SET_STEPPER_DECREMENT, active_step: department_store.active_step })}
                        startIcon={<ChevronLeftRoundedIcon />}
                        disabled={department_store.active_step === 0 ? true : false}
                    >
                        Previous
                    </Button>
                </Grid>
                <Grid item xs={10} justifyContent="center" alignItems="center">
                    <Stepper alternativeLabel activeStep={department_store.active_step} connector={<ColorlibConnector />}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
                <Grid item xs={1} justifyContent="center" alignItems="center">
                    {department_store.active_step !== 5 ? (
                        <Button
                            sx={{ borderRadius: 8 }}
                            variant="contained"
                            onClick={() => dispatch({ type: SET_STEPPER_INCREMENT, active_step: department_store.active_step })}
                            endIcon={<NavigateNextRoundedIcon />}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            sx={{ borderRadius: 8 }}
                            variant="contained"
                            onClick={() => dispatch({ type: SET_STEPPER_SUBMIT, active_step: department_store.active_step })}
                            endIcon={<CloudDoneIcon />}
                        >
                            Submit
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Card>
    );
}
