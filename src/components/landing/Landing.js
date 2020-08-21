import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RoomList from './RoomList';
import './landing.css';

/**
 * Functional component to represent landing page
 * @function
 * @returns { JSX.Element } element Landing component
 */
const Landing = () => {
  const [ dateIn, setDateIn ] = useState('');
  const [ dateOut, setDateOut ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ showResults, setShowResults ] = useState(false);

  /**
   * Handles room search
   * @function
   */
  const handleSearch = () => {
    setShowResults(false);
    setLoading(true);
    setTimeout(() => {
      setShowResults(true);
      setLoading(false)
    }, 1000);
  }

  /**
   * Checks given dates are valid
   * @function
   * @returns { Boolean } flag Flag for invalid date provided
   */
  const areInvalidDatesProvided = () => {
    if (!dateIn || dateIn.trim().length === 0 || !dateOut ||
      dateOut.trim().length === 0) return true;
    const inDateTime = new Date(dateIn).getTime();
    const outDateTime = new Date(dateOut).getTime();
    return outDateTime < inDateTime || new Date().getTime() > inDateTime;
  }

  /**
   * Renders main picture
   * @function
   * @returns { JSX.Element } element Main picture
   */
  const renderPictureSection = () => {
    return (
      <section id="main-picture">
        <div id="main-square">
          {renderTitle()}
          {renderSubtitle()}
          {renderDateInputs()}
          {renderSearchButton()}
          {renderSpinner()}
        </div>
      </section>
    );
  }

  /**
   * Renders title
   * @function
   * @returns { JSX.Element } element Title element
   */
  const renderTitle = () => {
    return (
      <Grid item xs={12}>
        <h1 id="title" className="text-white">Bridge Mills Hostel</h1>
      </Grid>
    );
  }

  /**
   * Renders subtitle
   * @function
   * @returns { JSX.Element } element Subtitle element
   */
  const renderSubtitle = () => {
    return (
      <Grid item xs={12} >
        <h2 id="subtitle" className="text-white">Where your dreams come true</h2>
      </Grid>
    );
  }

  /**
   * Renders a date picker
   * @function
   * @param { String } id Element id
   * @param { String } label Element label
   * @param { String } value Element value
   * @param { Function } onChange Element's on change function
   * @returns { JSX.Element } element Date picker element
   */
  const renderDateInput = (id, label, value, onChange) => {
    return (
      <TextField
        id={id}
        label={label}
        color="secondary"
        type="date"
        defaultValue={value}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
          style: { color: '#FFFFFF' }
        }}
        className="date-input"
        onChange={onChange}
        disabled={loading}
      />
    )
  }

  /**
   * Renders both date in and out inputs
   * @function
   * @returns { JSX.Element } element Date inputs
   */
  const renderDateInputs = () => {
    return (
      <Grid item xs={12}>
        {renderDateInput(
          'date-in-input',
          'Checkin date',
          dateIn,
          event => setDateIn(event.target.value))
        }
        {renderDateInput(
          'date-out-input',
          'Checkout date',
          dateOut,
          event => setDateOut(event.target.value))
        }
      </Grid>
    );
  }

  /**
   * Renders search button
   * @function
   * @returns { JSX.Element } element Search button
   */
  const renderSearchButton = () => {
    const disabled = loading || areInvalidDatesProvided();
    return (
        <Button
          id="search-button"
          variant="contained"
          color="secondary"
          disabled={disabled}
          onClick={handleSearch}>
          <span>Search</span>
        </Button>
    )
  }

  /**
   * Renders spinner element
   * @function
   * @returns { JSX.Element } element Spinner element
   */
  const renderSpinner = () => {
    if (!loading) return null;
    return (
      <Grid item xs={12} alignItems="center">
        <img src="/img/spinner.gif" alt="Loading..." className="spinner" id="#spinner"/>
      </Grid>
    );
  }

  /**
   * Renders list of available rooms section
   * @function
   * @returns { JSX.Element } element Section with list of available rooms
   */
  const renderListSection = () => {
    if (!showResults) return null;
    return (
      <section id="rooms">
        <RoomList />
      </section>
    );
  }

  return (
    <>
      {renderPictureSection()}
      {renderListSection()}
    </>
  )
}
export default Landing;
