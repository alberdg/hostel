import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  alert: {
    maxWidth: '60%',
    marginLeft: theme.spacing(5),
    marginTop: '2rem',
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(2),
  }
}));

/**
 * Functional component representing an error message with back button
 * @function
 * @param { String } message Error message
 * @returns { JSX.Element } element Error message component
 */
const ErrorMessage = ({ message }) => {
  const classes = useStyles();
  
  /**
   * Renders invalid dates error message
   * @function
   * @returns { JSX.Element } element Invalid dates error element
   */
  const renderErrorMessage = () => {
    return (
      <Grid item xs={12} className={classes.alert}>
        <Alert severity="error">{message}</Alert>
      </Grid>
    );
  }

  /**
   * Renders back button
   * @function
   * @returns { JSX.Element } element Form back button
   */
  const renderBackButton = () => {
    return (
      <Grid item xs={12} className={classes.spacing}>
        <Link to="/">
          <Button
            id="cancel-button"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Back
          </Button>
        </Link>
      </Grid>
    );
  }


    return (
      <>
        {renderErrorMessage()}
        {renderBackButton()}
      </>
    );
}
export default ErrorMessage;
