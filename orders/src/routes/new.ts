import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { NotFoundError, requireAuth, validateRequest, OrderStatus, BadRequestError } from '@jsticket/common/build';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket'
import { Order } from '../models/order'
import { OrderCreatedPublisher } from '../../events/publisher/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;


router.post('/api/orders', requireAuth,
 [
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('티켓id가 필요합니다.')
 ], 
validateRequest, 
async(req: Request, res: Response) => {
    const { ticketId } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if(!ticket){
        throw new NotFoundError();
    }

    const isReserved = await ticket.isReserved();
    if(isReserved){
        throw new BadRequestError('티켓 예약중 입니다.');
    }

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

    const order = Order.build({
        userId: req.currentUser!.id,
        status: OrderStatus.Create,
        expiresAt: expiration,
        ticket
    });
    await order.save();

    new OrderCreatedPublisher(natsWrapper.client).publish({
        id: order.id,
        version: order.version,
        status: order.status,
        userId: order.userId,
        expiresAt: order.expiresAt.toISOString(),
        ticket: {
            id: ticket.id,
            price: ticket.price,
        },
    });
    
    res.status(201).send(order);
});

export { router as newOrderRouter};