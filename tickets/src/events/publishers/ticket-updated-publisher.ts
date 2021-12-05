import { Publisher, Subjects, TicketUpdatedEvent } from '@jsticket/common/build'


export class TicketUpdatedPublisher extends Publisher <TicketUpdatedEvent>{
    readonly subject = Subjects.TicketUpdated;
}
 