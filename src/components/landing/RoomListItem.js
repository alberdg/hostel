import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/**
 * Functional component to represent a single room item
 * @function
 * @returns { JSX.Element } element List of available rooms
 */
const RoomListItem = ({ room }) => {

  /**
   * Renders single room detail
   * @function
   * @param { Object } room Room to render detail for
   * @returns { JSX.Element } element Room detail element
   */
  const renderRoomDetail = room => {
    return (
      <Grid container>
        {renderRoomTitle()}
        {renderRoomSubtitle()}
        {renderRoomPrice()}
        {renderRoomActions()}
      </Grid>
    )
  }

  /**
   * Renders room item
   * @function
   * @param { Object } room Room object
   * @param { String } key Element key
   * @returns { JSX.Element } element Room item element
   */
  const renderRoomItem = () => {
    const { picture, title } = room;
    debugger;
    return (

      <li className="room-list-item">
        <Grid container>
          <Grid item xs={12} md={4} lg={2}>
            <img src={picture} alt={title} className="room-list-item-picture"/>
          </Grid>
          <Grid item xs={12} md={8} lg={10} className="room-list-item-detail">
            {renderRoomDetail()}
          </Grid>
        </Grid>
      </li>
    )
  }


  /**
   * Renders room title
   * @function
   * @returns { JSX.Element } element Room title
   */
  const renderRoomTitle = () => {
    const { title, _id } = room;
    return (
      <Grid item xs={12}>
        <Link to={`/details/${_id}`}>
          <Typography variant="h6" component="h4" className="room-list-item-title">
            {title}
          </Typography>
        </Link>
      </Grid>
    )
  }

  /**
   * Renders room subtitle
   * @function
   * @returns { JSX.Element } element Room subtitle
   */
  const renderRoomSubtitle = () => {
    const { subtitle } = room;
    return (
      <Grid item xs={12}>
        <Typography variant="body1" component="h6"  className="room-list-item-subtitle">
          {subtitle}
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders room price
   * @function
   * @returns { JSX.Element } element Room price
   */
  const renderRoomPrice = () => {
    const { price } = room;
    return (
      <Grid item xs={12}>
        <Typography variant="body1" component="p" className="font-bold room-list-item-price">
          {price}€
        </Typography>
      </Grid>
    )
  }

  /**
   * Renders book room button
   * @function
   * @returns { JSX.Element } element Room price
   */
  const renderRoomActions = () => {
    const { _id } = room;
    return (
      <Grid item xs={12}>
        <Link to={`/details/${_id}`}>
          <Button variant="contained" color="primary" className="room-list-item-button">
            Details
          </Button>
        </Link>
        <Button variant="contained" color="primary" className="room-list-item-button">
          Book
        </Button>
      </Grid>
    )
  }

  return renderRoomItem();
}
export default RoomListItem;
