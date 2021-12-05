import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError, requireAuth } from '@jsticket/common/build';
import { Order, OrderStatus } from '../models/order';
import { OrderCancelledPublisher } from '../../events/publisher/order-cancelled-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();


router.delete('/api/orders/:orderId', requireAuth, async (req: Request, res: Response) => {
    
    const orders = await Order.findById(req.params.orderId).populate('ticket');
    
    if(!orders){
        throw new NotFoundError();
    }
    if( orders.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }
    orders.status = OrderStatus.Cancelled;
    await orders.save();

    new OrderCancelledPublisher(natsWrapper.client).publish({
        id: orders.id,
        version: orders.version,
        ticket: {
            id: orders.ticket.id,
        },
    });

    res.status(204).send(orders);
});


export { router as deleteOrderRouter};