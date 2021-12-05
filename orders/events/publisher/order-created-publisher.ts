import { Publisher, OrderCreatedEvent, Subjects } from "@jsticket/common/build";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;

}

