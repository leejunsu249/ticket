import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError, requireAuth } from '@jsticket/common/build';
import { Order } from '../models/order';

const router = express.Router();


router.get('/api/orders/:orderId', requireAuth,  async(req: Request, res: Response) => {
    
    const orders = await Order.findById(req.params.orderId).populate('ticket');

    if(!orders){
        throw new NotFoundError();
    }
    if( orders.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    res.send(orders);
});

export { router as showOrderRouter};