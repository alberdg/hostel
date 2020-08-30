import mongoose from 'mongoose';
import { app } from './app';
const SERVER_PORT = 3000;

/**
 * Starts Room's service web server
 * @function
 */
const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to Rooms MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(SERVER_PORT, () => {
    console.log(`Rooms service listening on port ${SERVER_PORT}`);
  });
};

start();
