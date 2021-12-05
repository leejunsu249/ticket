import request from 'supertest';
import { app } from '../../app';
import mongoose, { isValidObjectId } from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';
import { Ticket } from '../../models/ticket';

it('returns a 404 if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie',global.signin())
        .send({
            title: 'hello',
            price: 20,
        })
        .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'hello',
            price: 20,
        })
        .expect(401);
});

it('returns a 401 if the user does not own the ticket', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie',global.signin())
        .send({
            title: 'hello',
            price: 20,
        });

        await request(app)
            .put(`/api/tickets/${response.body.id}`)
            .set('Cookie',global.signin())
            .send({
                title: 'hello123',
                price: 10,
            })
            .expect(401);

});

it('returns a 400 if user provides an invalid title or price', async () => {
    const cookie = global.signin();

    const response = await request(app)
        .post(`/api/tickets/`)
        .set('Cookie',cookie)
        .send({
            title: 'hello',
            price: 20,
        });
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: '',
            price: 20,
        })
        .expect(400);
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'asdfadsf',
            price: -20,
        })
        .expect(400);

});

it('update ticket provide valid inputs', async () => {
    const cookie = global.signin();

    const response = await request(app)
        .post(`/api/tickets/`)
        .set('Cookie',cookie)
        .send({
            title: 'hello',
            price: 20,
        });
    const compareResponse = await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'leejs',
            price: 9990,
        })
        .expect(200);
    
        const ticketResponse = await request(app)
            .get(`/api/tickets/${response.body.id}`)
            .send();
        
        expect(ticketResponse.body.title).toEqual(compareResponse.body.title);
        expect(ticketResponse.body.price).toEqual(compareResponse.body.price);
});

it('publish an event', async () => {
  
    const cookie = global.signin();

    const response = await request(app)
        .post(`/api/tickets/`)
        .set('Cookie',cookie)
        .send({
            title: 'hello',
            price: 20,
        });
    const compareResponse = await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'leejs',
            price: 9990,
        })
        .expect(200);
  
      expect(natsWrapper.client.publish).toHaveBeenCalled();
  });

  it('rejects updates if the ticket is restved', async () => {
    const cookie = global.signin();

    const {body: response} = await request(app)
        .post(`/api/tickets/`)
        .set('Cookie',cookie)
        .send({
            title: 'hello',
            price: 20,
        });
    const ticket = await Ticket.findById(response.id);
    ticket!.set({ orderId: new mongoose.Types.ObjectId().toHexString()});
    await ticket!.save();

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'leejs',
            price: 9990,
        })
        .expect(400);
  });