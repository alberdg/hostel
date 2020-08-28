import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { isValidEmail, isValidPhoneNumber } from '../../utils';

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
  }
}));

/**
 * Functional component representing personal data form
 * @function
 * @returns { JSX.Element } element Personal data form
 */
const PersonalDataForm = () => {
  const classes = useStyles();
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');

  /**
   * Checks if the form is invalid
   * @function
   * @returns { Boolean } flag Invalid form flag
   */
  const isInvalidForm = () => {
    return firstname.trim().length === 0 || lastname.trim().length === 0 || !isValidEmail(email)
      || !isValidPhoneNumber(phoneNumber);
  }
  /**
   * Renders firstname input
   * @function
   * @returns { JSX.Element } element First name input
   */
  const renderFirstnameInput = () => {
    return (
      <Grid item xs={12}>
        <TextField
          id="first-name-input"
          variant="outlined"
          value={firstname}
          placeholder="First name"
          onChange={event => setFirstname(event.target.value)}
          className={classes.input}
        />
      </Grid>
    );
  }

  /**
   * Renders lastname input
   * @function
   * @returns { JSX.Element } element Last name input
   */
  const renderLastnameInput = () => {
    return (
      <Grid item xs={12} className="mt-3">
        <TextField
          id="last-name-input"
          variant="outlined"
          value={lastname}
          placeholder="Last name"
          onChange={event => setLastname(event.target.value)}
          className={classes.input}
        />
      </Grid>
    );
  }

  /**
   * Renders email input
   * @function
   * @returns { JSX.Element } element Email input
   */
  const renderEmailInput = () => {
    return (
      <Grid item xs={12} className="mt-3">
        <TextField
          id="email-input"
          type="email"
          variant="outlined"
          value={email}
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
          className={classes.input}
        />
      </Grid>
    );
  }

  /**
   * Renders phone number input
   * @function
   * @returns { JSX.Element } element Phone number input
   */
  const renderPhonenumberInput = () => {
    return (
      <Grid item xs={12} className="mt-3">
        <TextField
          id="phone-number-input"
          type="number"
          variant="outlined"
          value={phoneNumber}
          placeholder="Telephone"
          onChange={event => setPhoneNumber(event.target.value)}
          className={classes.input}
        />
      </Grid>
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
      <Grid item xs={12}>
        <Button
          id="next-button"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={disabled}
        >
          Next
        </Button>
        <Button
          id="cancel-button"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Cancel
        </Button>
      </Grid>
    )
  }

  return (
    <Grid item container className={classes.root}>
      {renderFirstnameInput()}
      {renderLastnameInput()}
      {renderEmailInput()}
      {renderPhonenumberInput()}
      {renderActions()}
    </Grid>
  )
}
export default PersonalDataForm;
