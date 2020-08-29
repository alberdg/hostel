import { app } from './app';
const SERVER_PORT = 4000;

/**
 * Starts Room's service web server
 * @function
 */
const start = async () => {
  app.listen(SERVER_PORT, () => {
    console.log(`Rooms service listening on port ${SERVER_PORT}`);
  });
};

start();
