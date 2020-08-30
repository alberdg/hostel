import { Room } from '../models/room';
/**
 * Gets room info by id
 * @function
 * @param { String } roomId Room id
 * @returns { Promise } promise Room info promise
 */
export const getRoomInfo = async (roomId: string) => {
  const room = await Room.findById(roomId);
  return room;
}
