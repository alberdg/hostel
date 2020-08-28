import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(5),
  },
}));

/**
 * Gets the steps to confirm a booking
 * @function
 * @returns { [String] } steps Booking steps
 */
const getSteps = () => {
  return ['Personal data', 'Payment data', 'Confirmation'];
}

/**
 * Gets step description
 * @function
 * @param { Number } step Step to get description for
 * @returns { String } description Step description
 */
const getStepContent = step => {
  switch (step) {
    case 0:
      return 'Please provide your personal data';
    case 1:
      return 'Please provide your payment data';
    case 2:
      return 'Booking confirmation';
    default:
      return 'Unknown step';
  }
}

/**
 * HorizontalLinearStepper functional component
 * @function
 * @returns { JSX.Element } element HorizontalLinearStepper component
 */
const HorizontalLinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  /**
   * Checks if the given step is optional
   * @function
   * @param { Number } step Step number
   * @returns { Boolean } flag Flag indicating if step is optional
   */
  const isStepOptional = (step) => {
    return false
  };

  /**
   * Checks if the given step has been skipped
   * @function
   * @param { Number } step Step number
   * @returns { Boolean } flag Flag indicating if step has been skipped
   */
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  /**
   * Next button handler
   * @function
   */
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  /**
   * Back button handler
   * @function
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /**
   * Skip button handler
   * @function
   */
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  /**
   * Reset button handler
   * @function
   */
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} id="booking-step">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
export default HorizontalLinearStepper;

//
// <div>
//   <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
//     Back
//   </Button>
//   {isStepOptional(activeStep) && (
//     <Button
//       variant="contained"
//       color="primary"
//       onClick={handleSkip}
//       className={classes.button}
//     >
//       Skip
//     </Button>
//   )}
//
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={handleNext}
//     className={classes.button}
//   >
//     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//   </Button>
// </div>
