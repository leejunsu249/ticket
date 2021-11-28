import express, { Request, Response } from 'express';
import { body } from 'express-validator'
import { NotFoundError, validateRequest, requireAuth, NotAuthorizedError } from '@jsticket/common/build';
import { Ticket } from '../models/ticket'
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put('/api/tickets/:id', requireAuth, 
[
    body('title').not().isEmpty().withMessage('제목을 입력해주세요.'),
    body('price').isFloat({ gt: 0 }).withMessage('가격을 확인해주세요'),
],
validateRequest, async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if(!ticket){
        throw new NotFoundError();
    }

    if(ticket.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    ticket.set({
        title: req.body.title,
        price: req.body.price
    });
    await ticket.save();
    await new TicketUpdatedPublisher(natsWrapper.client).publish({
        id: ticket.id,
        title: ticket.title,
        price: ticket.price,
        userId: ticket.userId,
    });

    res.status(200).send(ticket);
});

export { router as updateTicketRouter};


