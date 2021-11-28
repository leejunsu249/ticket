import { Publisher, Subjects, TicketCreatedEvent } from '@jsticket/common/build'


export class TicketCreatedPublisher extends Publisher <TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;

}
