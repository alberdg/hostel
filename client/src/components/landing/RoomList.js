import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RoomListItem from './RoomListItem';
import { ROOMS } from '../../constants';

/**
 * Functional component to represent a list of rooms available
 * @function
 * @returns { JSX.Element } element List of available rooms
 */
const RoomList = () => {
  const [ rooms, setRooms ] = useState([]);

  useEffect(() => {
    setRooms(ROOMS);
  }, []);



  /**
   * Renders room list items
   * @function
   * @returns { [JSX.Element] } roomItems Room items array
   */
  const renderRoomItems = () => {
    return rooms.map( (room, key) => <RoomListItem room={room} key={key} />);
  }

  /**
   * Renders Rooms' list
   * @function
   * @returns { JSX.Element } element Rooms list
   */
  const renderRoomList = () => {
    return(
      <List id="room-list" component="ul" aria-label="main rooms">
        {renderRoomItems()}
      </List>
    );
  }

  /**
   * Renders List title
   * @function
   * @returns { JSX.Element } element Title
   */
  const renderTitle = () => {
    return (
      <Typography variant="h5" component="h3">
        Available rooms
      </Typography>
    )
  }

  return (
    <Card>
      <CardContent>
        {renderTitle()}
        {renderRoomList()}
      </CardContent>
    </Card>
  );
}
export default RoomList;
