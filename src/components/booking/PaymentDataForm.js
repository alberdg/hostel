import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BookingContext } from '../../contexts/BookingContext';
import './payment.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  input: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1),
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  label: {
    fontWeight: 400,
  },
  spacing: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  inline: {
    display: 'inline-flex',
    marginTop: theme.spacing(2),
  }
}));

/**
 * Functional component representing personal data form
 * @function
 * @returns { JSX.Element } element Personal data form
 */
const PaymentDataForm = () => {
  const classes = useStyles();
  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    cardHolderName, storeCardHolderName,
    cardNumber, storeCardNumber,
    cardCvc, storeCardCvc,
    cardExpirationMonth, storeCardExpirationMonth,
    cardExpirationYear, storeCardExpirationYear,
    bookingStep, storeBookingStep,
  } = useContext(BookingContext);

  if (bookingStep !== 1) return null;


  const now = new Date();

  /**
   * Validates a card expiration month
   * @function
   * @returns { Boolean } flag Flag indicating if the card expiration month is Valid
   */
  const isValidExpirationMonth = () => {
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const month = parseInt(cardExpirationMonth);
    const year = parseInt(cardExpirationYear);
    return cardExpirationMonth.trim().length === 2 && month > 0 && month < 13 &&
      (cardExpirationYear.trim().length === 0 || year !== currentYear || (year === currentYear && cardExpirationMonth >= currentMonth));
  }

  /**
   * Validates a card expiration year
   * @function
   * @returns { Boolean } flag Flag indicating if the card expiration year is Valid
   */
  const isValidExpirationYear = () => {
    const currentYear = now.getFullYear();
    return cardExpirationYear.trim().length === 4 && cardExpirationYear >= currentYear;
  }

  /**
   * Validates a card number
   * @function
   * @returns { Boolean } flag Flag indicating if the card number is Valid
   */
  const isValidCardNumber = () => {
    return new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
    .test(cardNumber);
  }

  /**
   * Validates a card cvc
   * @function
   * @returns { Boolean } flag Flag indicating if the card cvc is Valid
   */
  const isValidCvC = () => {
    return new RegExp(/^[0-9]{3}$/).test(cardCvc);
  }

  const validCardNumber = isValidCardNumber();
  const validCvc = isValidCvC();
  const validExpirationMonth = isValidExpirationMonth();
  const validExpirationYear = isValidExpirationYear();

  /**
   * Checks if the form is invalid
   * @function
   * @returns { Boolean } flag Invalid form flag
   */
  const isInvalidForm = () => {
    return !validCardNumber || !validCvc || !validExpirationMonth ||
      !validExpirationYear || cardHolderName.trim().length === 0;
  }

  /**
   * Renders section with title and children
   * @function
   * @param { String } title Section title
   * @param { JSX.Element } children Children elements
   * @returns { JSX.Element } element Section element
   */
  const renderSection  = (title, children) => {
    return (
      <Grid item container className={classes.spacing}>
        <Grid item xs={12}>
          <Typography variant="h6" component="span" className={classes.label}>
            {title}
          </Typography>
          <Divider />
          {children}
        </Grid>
      </Grid>
    );
  }

  /**
   * Renders personal data collected in previous step
   * @function
   * @returns { JSX.Element } element Personal data element
   */
  const renderPersonalData = () => {
    const children = (
      <>
        {renderFullname()}
        {renderEmail()}
        {renderPhoneNumber()}
      </>
    );
    return renderSection('Personal data', children);
  }

  /**
   * Renders payment data form
   * @function
   * @returns { JSX.Element } element Payment data element
   */
  const renderPaymentData = () => {
    const children = (
      <>
        {renderCardHolderName()}
        {renderCardNumber()}
        {renderCardExtraData()}
      </>
    );
    return renderSection('Payment data', children);
  }

  /**
   * Renders full name
   * @function
   * @returns { JSX.Element } element Full name label
   */
  const renderFullname = () => {
    return (
      <Grid item xs={12}>
        <Typography id="fullname-label" variant="body1" component="span"  className={classes.label}>
          Fullname: {firstname} {lastname}
        </Typography>
      </Grid>
    );
  }

  /**
   * Renders email
   * @function
   * @returns { JSX.Element } element Email label
   */
  const renderEmail = () => {
    return (
      <Grid item xs={12}>
        <Typography id="email-label" variant="body1" component="span"  className={classes.label}>
          Email: {email}
        </Typography>
      </Grid>
    );
  }

  /**
   * Renders email
   * @function
   * @returns { JSX.Element } element Email label
   */
  const renderPhoneNumber = () => {
    return (
      <Grid item xs={12}>
        <Typography id="phone-number-label" variant="body1" component="span"  className={classes.label}>
          Telephone: {phoneNumber}
        </Typography>
      </Grid>
    );
  }

  /**
   * Renders card holder name input
   * @function
   * @returns { JSX.Element } element Card holder name input
   */
   const renderCardHolderName = () => {
    return (
      <Grid item xs={12} className="mt-3">
        <TextField
          id="card-holder-name-input"
          variant="outlined"
          value={cardHolderName}
          placeholder="Card holder name"
          onChange={event => storeCardHolderName(event.target.value)}
          className={classes.input}
        />
      </Grid>
    );
  }

  /**
   * Renders card number input
   * @function
   * @returns { JSX.Element } element Card number input
   */
   const renderCardNumber = () => {
     const errorMessage = (!validCardNumber) ? 'Invalid card number' : '';
    return (
      <Grid item xs={12} className="mt-3">
        <TextField
          type="number"
          id="card-number-input"
          variant="outlined"
          value={cardNumber}
          placeholder="Card number"
          onChange={event => storeCardNumber(event.target.value)}
          className={classes.input}
          error={!validCardNumber}
          helperText={errorMessage}
        />
      </Grid>
    );
  }

  /**
   * Renders card cvc input
   * @function
   * @returns { JSX.Element } element Card cvc input
   */
   const renderCardCVC = () => {
     const errorMessage = (!validCvc) ? 'CVC consists of 3 digits' : '';
    return (
      <Grid item xs={12} md={4}>
        <TextField
          id="card-cvc-input"
          variant="outlined"
          value={cardCvc}
          placeholder="CVC"
          onChange={event => storeCardCvc(event.target.value)}
          className={classes.input}
          helperText={errorMessage}
          error={!validCvc}
        />
      </Grid>
    );
  }

  /**
   * Renders expiration month input
   * @function
   * @returns { JSX.Element } element Expiration month element
   */
  const renderExpirationMonth = () => {
    const errorMessage = (!validExpirationMonth) ? 'Invalid month' : '';
    return (
      <Grid item xs={12} md={4}>
        <TextField
          id="card-expiration-month-input"
          variant="outlined"
          value={cardExpirationMonth}
          placeholder="MM"
          onChange={event => storeCardExpirationMonth(event.target.value)}
          className={classes.input}
          helperText={errorMessage}
          error={!validExpirationMonth}
        />
      </Grid>
    );
  }

  /**
   * Render expiration year input
   * @function
   * @returns { JSX.Element } element Expiration year element
   */
  const renderExpirationYear = () => {
    const errorMessage = (!validExpirationYear) ? 'Invalid year' : '';
    return (
      <Grid item xs={12} md={4}>
        <TextField
          id="card-expiration-year-input"
          variant="outlined"
          value={cardExpirationYear}
          placeholder="YYYY"
          onChange={event => storeCardExpirationYear(event.target.value)}
          className={classes.input}
          helperText={errorMessage}
          error={!validExpirationYear}
        />
      </Grid>
    );
  }

  /**
   * Renders card expiration inputs and cvc
   * @function
   * @returns { JSX.Element } element Extra data inputs
   */
   const renderCardExtraData = () => {
    return (
      <div className={classes.inline}>
        {renderCardCVC()}
        {renderExpirationMonth()}
        {renderExpirationYear()}
      </div>
    );
  }

  /**
   * Renders form actions
   * @function
   * @returns { JSX.Element } element Form action elements
   */
  const renderActions = () => {
    const disabled = isInvalidForm();
    return (
      <Grid item xs={12} className={classes.spacing}>
        <Button
          id="next-button"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => storeBookingStep(bookingStep - 1)}
        >
          Back
        </Button>
        <Button
          id="next-button"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disabled}
          onClick={() => storeBookingStep(bookingStep + 1)}
        >
          Next
        </Button>
        <Button
          id="cancel-button"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => storeBookingStep(0)}
        >
          Cancel
        </Button>
      </Grid>
    );
  }

  /**
   * Renders powered by stripe logo
   * @function
   * @returns { JSX.Element } element Stripe logo element
   */
  const renderStripeLogo = () => {
    return (
      <Grid item xs={12} className={classes.spacing}>
        <div className="stripe-logo"></div>
      </Grid>
    );
  }

  return (
    <Grid item container className={classes.root}>
      {renderPersonalData()}
      {renderPaymentData()}
      {renderActions()}
      {renderStripeLogo()}
    </Grid>
  )
}
export default PaymentDataForm;
