import express, { Request, Response } from 'express';
import { body } from 'express-validator'
import { requireAuth, validateRequest } from '@jsticket/common/build';
import { Ticket } from '../models/ticket'

const router = express.Router();

router.post('/api/tickets', requireAuth,[
    body('title').not().isEmpty().withMessage('제목을 입력해주세요.'),
    body('price').isFloat({ gt: 0 }).withMessage('가격을 확인해주세요'),

],validateRequest, async (req: Request, res: Response) => {
  const { title, price } = req.body;
  
  const ticket = Ticket.build({
    title,
    price,
    userId: req.currentUser!.id
  });
  await ticket.save();

  res.status(201).send(ticket);
});

export { router as createTicketRouter };
