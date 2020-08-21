import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RoomListItem from './RoomListItem';

/**
 * Functional component to represent a list of rooms available
 * @function
 * @returns { JSX.Element } element List of available rooms
 */
const RoomList = () => {
  const [ rooms, setRooms ] = useState([]);

  useEffect(() => {
    setRooms([
      {
        _id: 1,
        picture: 'https://lh3.googleusercontent.com/proxy/l_wLw-nqEmmO6w-S6JfgPyIt-I5Rg2QpZANSpxd0xmtYAyM3ZfCaxcbAQHv6giJ_TXznTGCjdGso8MlllgHcNCW6aA84Myliw8RF0Bgd-o_HCuPvqAeMcBfbAA4',
        title: 'Room 1',
        subtitle: 'First floor, 2 beds, shared bathroom',
        beds: 2,
        ensuiteBathroom: false,
        price: 30,
      },
      {
        _id: 2,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
        title: 'Room 2',
        subtitle: 'First floor, 3 beds, shared bathroom',
        beds: 3,
        ensuiteBathroom: false,
        price: 45,
      },
      {
        _id: 3,
        picture: 'https://pix10.agoda.net/hotelImages/406/4063221/4063221_18022813480062438784.jpg?s=1024x768',
        title: 'Room 3',
        subtitle: 'First floor, 1 King side bed, ensuite bathroom',
        beds: 1,
        ensuiteBathroom: true,
        price: 45,
      },
      {
        _id: 4,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSqGeaAzeyW8JFH5gwutQvDDk8VoGyaqZ81g&usqp=CAU',
        title: 'Room 4',
        subtitle: 'Second floor, 1 bed, shared bathroom',
        beds: 1,
        ensuiteBathroom: false,
        price: 15,
      },
      {
        _id: 5,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
        title: 'Room 5',
        subtitle: 'Second floor, 3 beds, shared bathroom',
        beds: 3,
        ensuiteBathroom: false,
        price: 45,
      },
      {
        _id: 6,
        picture: 'https://pix10.agoda.net/hotelImages/406/4063221/4063221_18022813480062438784.jpg?s=1024x768',
        title: 'Room 6',
        subtitle: 'Second floor, 1 Kingsize bed, ensuite bathroom',
        beds: 1,
        ensuiteBathroom: true,
        price: 45,
      },
      {
        _id: 7,
        picture: 'https://lh3.googleusercontent.com/proxy/l_wLw-nqEmmO6w-S6JfgPyIt-I5Rg2QpZANSpxd0xmtYAyM3ZfCaxcbAQHv6giJ_TXznTGCjdGso8MlllgHcNCW6aA84Myliw8RF0Bgd-o_HCuPvqAeMcBfbAA4',
        title: 'Room 7',
        subtitle: 'Third Floor, 2 beds, shared bathroom',
        beds: 2,
        ensuiteBathroom: false,
        price: 30,
      },
      {
        _id: 8,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR91YDkkDl8ffbHc53_lqFypzSAItfTy4MF5w&usqp=CAU',
        title: 'Room 8',
        subtitle: 'First floor, 3 beds, shared bathroom',
        beds: 3,
        ensuiteBathroom: false,
        price: 45,
      },
      {
        _id: 9,
        picture: 'https://elf.acomodeo.com/i/620x480/b26ab24ba21b88a057d3f2a96f45b367edcc31d0d127c6472e1fb6bab794b422',
        title: 'Junior Suite',
        subtitle: 'Second floor, 1 Kingsize beds, ensuite bathroom',
        beds: 1,
        ensuiteBathroom: true,
        price: 60,
      },
    ]);
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
