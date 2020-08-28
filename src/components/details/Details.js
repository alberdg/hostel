import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './details.css';
import { ROOMS } from '../../constants';
/**
 * Functional component to represent a room detail
 * @function
 * @param { Object } match React router dom match object
 * @returns { JSX.Element } component Details component
 */
const Details = ({ match }) => {
  const [ room, setRoom ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const roomId = parseInt(match?.params?.id);
  useEffect(() => {
    const room = ROOMS.find(item => item._id === roomId);
    setRoom(room);
    setLoading(false);
  }, [roomId]);

  /**
   * Renders invalid room provided element
   * @function
   * @returns { JSX.Element } element Invalid room provided element
   */
  const renderNoRoomProvided = () => {
    if (loading || room) return null;
    return <h1>No room</h1>
  }

  if (!room) {
    return renderNoRoomProvided();
  }

  /**
   * Renders title element
   * @function
   * @returns { JSX.Element } element Title element
   */
  const renderTitle = () => {
    const { title } = room;
    return (
      <Grid item xs={12} className="mt-3 text-center">
        <Typography id="details-title" variant="h4" component="h1">
        {title}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders subtitle element
   * @function
   * @returns { JSX.Element } element Subtitle element
   */
  const renderSubtitle = () => {
    const { subtitle } = room;
    return (
      <Grid item xs={12} className="mt-3 text-center">
        <Typography id="details-subtitle" variant="body1" component="h2">
        {subtitle}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders desciption element
   * @function
   * @returns { JSX.Element } element Description element
   */
  const renderDescription = () => {
    const { description } = room;
    return (
      <Grid item xs={12} className="mt-3">
        <Typography variant="body2" component="p" className="details-description mx-auto">
        {description}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders room picture
   * @function
   * @returns { JSX.Element } element Room picture element
   * */
  const renderPicture = () => {
    return (
      <Grid item xs={12} className="text-center mt-3">
        <img src={room.picture} alt={room.title} className="details-picture"/>
      </Grid>
    )
  }

  /**
   * Renders price element
   * @function
   * @returns { JSX.Element } element Price element
   * */
  const renderPrice = () => {
    const { price } = room;
    return (
      <Grid item xs={12} className="mt3 text-center">
        <Typography id="details-price" variant="body1" component="span" className="font-bold">
          Price per person: {price}€
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders book now button
   * @function
   * @returns { JSX.Element } element Book now button
   * */
  const renderBookNow = () => {
    return (
      <Grid item xs={12} className="mt-3 mb-3 text-center">
        <Link to={`/booking/${roomId}`} id="book-now-button">
          <Button  variant="contained" color="primary">
            Book now
          </Button>
        </Link>
      </Grid>
    )
  }

  return (
    <Grid container>
      {renderTitle()}
      {renderSubtitle()}
      {renderPicture()}
      {renderPrice()}
      {renderDescription()}
      {renderBookNow()}

    </Grid>
  )
}

export default Details;
