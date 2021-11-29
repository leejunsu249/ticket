import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { Order, OrderStatus } from '../../models/order';

const buildTicket = async () => {
    const ticket = Ticket.build({
        title: 'hello',
        price: 20
    });
    await ticket.save();

    return ticket;
}

it('marks an orderstatus as cancelled ', async () => {
    const ticket = await buildTicket();

    const user = global.signin();

    const {body: order} = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

    await request(app)
        .delete(`/api/orders/${order.id}`)
        .set('Cookie', user)
        .send()
        .expect(204);

    const updateOrder = await Order.findById(order.id);   
    
    expect(updateOrder!.status).toEqual(OrderStatus.Cancelled);
});


it('returns an error another user tries to delete the order', async () => {
    const ticket = await buildTicket();

    const user = global.signin();

    const {body: order} = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

    await request(app)
        .delete(`/api/orders/${order.id}`)
        .set('Cookie', global.signin())
        .send()
        .expect(401);

});


it.todo('emits a order cancelled event')