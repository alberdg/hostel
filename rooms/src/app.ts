import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { getRoomInfoRouter } from './routes/get-room-info';

const app = express();
app.use(json());
app.use(getRoomInfoRouter);

export { app };
