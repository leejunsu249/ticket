import { Ticket } from '../ticket';


const buildTicket = async () => {
    const ticket = Ticket.build({
        title: 'hello',
        price: 10,
        userId: 'abc'
    });
    await ticket.save();

    return ticket;
}

it('implements optimistic concurrency control', async() => {
    const ticket = await buildTicket();

    const ticketOne = await Ticket.findById(ticket.id);
    const ticketTwo = await Ticket.findById(ticket.id);

    ticketOne!.set({price: 20});
    ticketTwo!.set({price: 30});

    await ticketOne!.save();

    try{
        await ticketTwo!.save();
    } catch (err){
        return;
    }

    throw new Error('Should not reach this point');

});

it('increments the version number on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'hello',
        price: 10,
        userId: 'abc'
    });
    
    await ticket.save();
    expect(ticket.version).toEqual(0);
    await ticket.save();
    expect(ticket.version).toEqual(1);
    await ticket.save();
    expect(ticket.version).toEqual(2);
});
