import express, {Request, Response } from 'express';
import { body } from 'express-validator';
import { NotFoundError, requireAuth, validateRequest, OrderStatus, BadRequestError, NotAuthorizedError } from '@jsticket/common/build';
import { Order } from '../models/order';
import { Payment } from '../models/payment';
import { PaymentCreatedPublisher } from '../events/publish/payments-created-publish';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post('/api/payments',requireAuth, 
[
    body('token').not().isEmpty(),
    body('orderId').not().isEmpty(),
], 
validateRequest, async (req: Request, res: Response) => {
    const { token, orderId } = req.body;

    const order = await Order.findById(orderId);

    if(!order){
        throw new NotFoundError();
    }

    if(order.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    if(order.status === OrderStatus.Cancelled) {
        throw new BadRequestError('Cannot pay  for an cancelled order');
    }

    const payment = Payment.build({
        orderId,
        stripeId: Math.random().toString(36),
    });
    await payment.save();
    new PaymentCreatedPublisher(natsWrapper.client).publish({
        id: payment.id,
        orderId: payment.orderId,
        stripeId: payment.stripeId,
    });

    res.status(201).send({success: true});

});

export { router as createChargeRouter };