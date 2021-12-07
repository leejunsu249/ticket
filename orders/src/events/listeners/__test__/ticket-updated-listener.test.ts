import { Message } from 'node-nats-streaming';
import { TicketUpdatedListener } from "../ticket-update-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketUpdatedEvent } from "@jsticket/common/build";
import mongoose  from "mongoose";
import { Ticket } from '../../../models/ticket';

const setup = async () => {

    const listener = new TicketUpdatedListener(natsWrapper.client);
  
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'hello',
        price: 20
    });
    await ticket.save();

    const data: TicketUpdatedEvent['data'] = {
      id: ticket.id,
      version: ticket.version + 1,
      title: 'new hello',
      price: 999,
      userId: 'asdfmlk'
    };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, ticket };
};


it('finds, updates, and saves a ticket', async () => {
    const {msg, data, ticket, listener} = await setup();

    await listener.onMessage(data, msg);

    const updatedTicket = await Ticket.findById(ticket.id);

    expect(updatedTicket!.title).toEqual(data.title);
    expect(updatedTicket!.price).toEqual(data.price);
    expect(updatedTicket!.version).toEqual(data.version);


});

it('acks the message', async () => {
    const {data, listener, msg, ticket } = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});

it('does not call ack event has a skipped version', async () => {
  const {data, listener, msg, ticket } = await setup();

  data.version = 10;

  try{
    await listener.onMessage(data,msg);
  } catch(err) {
    return;
  }

  expect(msg.ack).not.toHaveBeenCalled();
});