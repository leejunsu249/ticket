import { Subjects, Publisher, ExpirationCompleteEvent } from '@jsticket/common/build';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    
    readonly subject = Subjects.ExpirationComplete;
}