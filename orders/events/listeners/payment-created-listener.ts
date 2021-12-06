import { Message } from 'node-nats-streaming';
import { Subjects, Listener, PaymentCreatedEvent } from '@jsticket/common/build';
import { queueGroupName } from './queue-group-name';
import { Order, OrderStatus } from '../../src/models/order';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
    queueGroupName = queueGroupName;
  
    async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {

        const order = await Order.findById(data.orderId);
        
        if(!order) {
            throw new Error('Order not found');
        }
        
        order.set({
            status: OrderStatus.Complete,
        });
        await order.save();

        msg.ack();
    }
}
  

