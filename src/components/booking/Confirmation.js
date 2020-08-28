import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BookingContext } from '../../contexts/BookingContext';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
  spacing: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
}));
/**
 * Functional component representing Confirmation component
 * @function
 * @returns { JSX.Element } element Confirmation component
 */
const Confirmation = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    bookingStep,
    firstname,
    email,
    dateIn,
    dateOut,
    clearBooking
  } = useContext(BookingContext);
  if (bookingStep !== 2) return null;

  /**
   * Clears the context and redirects user to main page
   * @function
   */
  const clearContext = () => {
    clearBooking();
    history.push('/');

  }
  /**
   * Renders confirmation title
   * @function
   * @returns { JSX.Element } element Confirmation title
   */
  const renderTitle = () => {
    return (
      <Grid item xs={12} className={classes.title}>
        <Typography variant="h4" component="h1">
          Congratulations, your booking has been confirmed!
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders confirmation paragraph
   * @function
   * @returns { JSX.Element } element Confirmation paragraph
   */
  const renderParagraph = () => {
    return (
      <Grid item xs={12} className={classes.spacing}>
        <Typography variant="body2" component="p">
          {firstname}, your booking has been confirmed for Bridge Mills hostel. You can check in from {dateIn} 12:00
          and you have to leave the room on {dateOut}. We have sent you a confirmation email to {email}.
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders confirmation thanks paragraph
   * @function
   * @returns { JSX.Element } element Confirmation thanks paragraph
   */
  const renderThanksParagraph = () => {
    return (
      <Grid item xs={12} className={classes.spacing}>
        <Typography variant="body2" component="p">
          We hope you enjoy your time at Bridge Mills Hostel, thanks for trusting us.
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders finish button
   * @function
   * @returns { JSX.Element } element Finish button
   */
  const renderFinishButton = () => {
    return (
      <Grid item xs={12} className={classes.spacing}>
        <Button variant="contained" color="primary" onClick={() => clearContext()}>
          Finish
        </Button>
      </Grid>
    )
  }

  return (
    <Grid item container>
      {renderTitle()}
      {renderParagraph()}
      {renderThanksParagraph()}
      {renderFinishButton()}
    </Grid>
  )
}
export default Confirmation;
