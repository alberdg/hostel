import { Router, Request, Response } from 'express';
import { param } from 'express-validator';
import { getRoomInfo } from '../services/get-room-info-srv';
const router = Router();

/**
 * Controller to get room info
 * @function
 * @param { String } id Room id
 */
router.get('/api/rooms/:id', [
  param('id')
    .notEmpty()
], async (req: Request, res: Response) => {
  const roomId = req.params.id;
  const room = await getRoomInfo(roomId);
  res.status(200).send({ room });
});

export { router as getRoomInfoRouter };
