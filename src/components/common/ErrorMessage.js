import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

/**
 * Functional component representing an error message with back button
 * @function
 * @param { String } message Error message
 * @returns { JSX.Element } element Error message component
 */
const ErrorMessage = ({ message }) => {

  /**
   * Renders invalid dates error message
   * @function
   * @returns { JSX.Element } element Invalid dates error element
   */
  const renderErrorMessage = () => {
    return (
      <Grid item xs={12} className="mt-3 full-width-with-padding">
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
      <Grid item xs={12} className="mt-3 full-width-with-padding">
        <Link to="/">
          <Button
            id="cancel-button"
            variant="contained"
            color="primary"
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
