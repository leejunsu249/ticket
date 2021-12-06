import { Subjects, Publisher, PaymentCreatedEvent} from '@jsticket/common/build';


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}