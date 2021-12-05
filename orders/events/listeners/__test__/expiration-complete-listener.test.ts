import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';
import { ExpirationCompleteEvent, OrderStatus } from '@jsticket/common/build';
import { ExpirationCompleteListener } from '../expiration-complete-listener';
import { natsWrapper } from '../../../src/nats-wrapper';
import { Ticket } from '../../../src/models/ticket';
import { Order } from '../../../src/models/order';


const setup = async () => {

  const listener = new ExpirationCompleteListener(natsWrapper.client);

  const ticket = Ticket.build({
      id: new mongoose.Types.ObjectId().toHexString(),
      title: 'hello',
      price: 20,
  });
  await ticket.save();

  const order = Order.build({
    status: OrderStatus.Create,
    userId: 'asdfads',
    expiresAt: new Date(),
    ticket,
  });
  await order.save();
  
  const data: ExpirationCompleteEvent['data'] = {
    orderId: order.id,
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, ticket, order };
};

it('updates the order status to cancelled', async () => {
    const { listener, data, msg, order } = await setup();

    await listener.onMessage(data, msg);

    const updatedOrder = await Order.findById(order.id);
    expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

it('emit an OrderCancelled event', async () => {
    const { listener, data, msg, order } = await setup();

    await listener.onMessage(data, msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled();

    const eventData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1]);
    expect(eventData.id).toEqual(order.id);

});

it('ack the message', async () => {
    const { listener, data, msg } = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});

