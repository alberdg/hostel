import mongoose from 'mongoose';
import request from 'supertest';
import { Room } from '../../models/room';
import { app } from '../../app';

it('Should return a status code of 404 if room is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  request(app)
    .get(`/api/rooms/${id}`)
    .expect(404);
});

it('Should return the room if found', async () => {
  const room = Room.build({
    title: 'Test room',
    subtitle: 'Elegant room',
    price: 30,
    picture: 'https://i.pinimg.com/originals/73/21/30/732130ccb92210b9d33c9f7806fcc6b3.jpg',
    description: 'It is an elegant room',
    beds: 2,
    ensuiteBathroom: false
  })
  await room.save();

  const response = await request(app)
    .get(`/api/rooms/${room._id}`)
    .send()
    .expect(200);

  expect(response.body.room.title).toEqual('Test room');
  expect(response.body.room.subtitle).toEqual('Elegant room');
  expect(response.body.room.price).toEqual(30);
  expect(response.body.room.picture).toEqual('https://i.pinimg.com/originals/73/21/30/732130ccb92210b9d33c9f7806fcc6b3.jpg');
  expect(response.body.room.description).toEqual('It is an elegant room');
  expect(response.body.room.beds).toEqual(2);
  expect(response.body.room.ensuiteBathroom).toEqual(false);
});
