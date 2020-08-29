import React, { useState, useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import HorizontalLinearStepper from '../common/Step';
import PersonalDataForm from './PersonalDataForm';
import PaymentDataForm from './PaymentDataForm';
import Confirmation from './Confirmation';
import { ROOMS } from '../../constants';
import { BookingContext } from '../../contexts/BookingContext';
import './booking.css';

/**
 * Functional class representing booking component
 * @function
 * @returns { JSX.Element } element Booking component
 */
const Booking = ({ match }) => {
  const roomId = parseInt(match?.params?.id);
  const [ room, setRoom ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { dateIn, dateOut } = useContext(BookingContext);

  useEffect(() => {
    const room = ROOMS.find(item => item._id === roomId);
    setRoom(room);
    setLoading(false);
  }, [ roomId ]);

  if (!loading && !room) {
    return <h1>Invalid room</h1>
  }

  if (loading) {
    return 'Loading ...';
  }

  const renderSteps = () => {
    return (
      <Grid item xs={12} className="mt-3 text-center">
        <HorizontalLinearStepper />
      </Grid>
    )
  }

  /**
   * Renders room title
   * @function
   * @returns { JSX.Element } element Room title
   */
  const renderTitle = () => {
    const { title } = room;
    return (
      <Grid item xs={12} className="mobile-text-center">
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders room subtitle
   * @function
   * @returns { JSX.Element } element Room subtitle
   */
  const renderSubtitle = () => {
    const { subtitle } = room;
    return (
      <Grid item xs={12} className="mt-3 mobile-text-center">
        <Typography variant="body1" component="p">
          {subtitle}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders room price
   * @function
   * @returns { JSX.Element } element Room subtitle
   */
  const renderPrice = () => {
    const { price } = room;
    return (
      <Grid item xs={12} className="mt-3 mobile-text-center">
        <Typography variant="body2" component="span" className="font-bold">
          {price}€ per night
        </Typography>
      </Grid>
    )
  }

  const renderDates = () => {
    return (
      <Grid item xs={12} className="mt-3 mobile-text-center">
        <Typography variant="body1" component="span">
          Checkin date: {dateIn} - Checkout date: {dateOut}
        </Typography>
      </Grid>
    )
  }
  /**
   * Renders all the room information needed
   * @function
   * @returns { JSX.Element } element Room information element
   */
  const renderRoomInformation = () => {
    const { picture, title } = room;
    return (
      <Grid item xs={12} className="full-width-with-padding display-inline-flex">
        <Grid item xs={12} md={4} className="sm-text-center">
          <img src={picture} alt={title} className="md-booking-picture booking-picture" />
        </Grid>
        <Grid item xs={12} md={8}>
          {renderTitle()}
          {renderSubtitle()}
          {renderDates()}
          {renderPrice()}
        </Grid>
      </Grid>
    )
  }

  /**
   * Renders personal data form
   * @function
   * @returns { JSX.Element } element Personal data form
   */
  const renderPersonalDataForm = () => {
    return <PersonalDataForm />
  }

  /**
   * Renders payment data form
   * @function
   * @returns { JSX.Element } element Payment data form
   */
  const renderPaymentDataForm = () => {
    return <PaymentDataForm />
  }

  /**
   * Renders confirmation
   * @function
   * @returns { JSX.Element } element Confirmation element
   */
  const renderConfirmation = () => {
    return <Confirmation />
  }

  return (
    <Grid item container>
      {renderSteps()}
      {renderRoomInformation()}
      {renderPersonalDataForm()}
      {renderPaymentDataForm()}
      {renderConfirmation()}
    </Grid>
  )
}
export default Booking;
