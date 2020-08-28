import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BookingContext } from '../../contexts/BookingContext';

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
  const { bookingStep } = useContext(BookingContext);
  const steps = getSteps();

  return (
    <div className={classes.root} id="booking-step">
      <Stepper activeStep={bookingStep}>
        {steps.map((label, index) => {
          const stepProps = {
            active: index === bookingStep
          };
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {bookingStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(bookingStep)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
export default HorizontalLinearStepper;

//
// <div>
//   <Button disabled={bookingStep === 0} onClick={handleBack} className={classes.button}>
//     Back
//   </Button>
//   {isStepOptional(bookingStep) && (
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
//     {bookingStep === steps.length - 1 ? 'Finish' : 'Next'}
//   </Button>
// </div>
