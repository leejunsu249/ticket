import { Publisher, OrderCancelledEvent, Subjects } from "@jsticket/common/build";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}

