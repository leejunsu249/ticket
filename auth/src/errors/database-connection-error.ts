
export class DataConnectionError extends Error{
    reason = 'db 접속 실패';

    constructor(){
        super();

        Object.setPrototypeOf(this, DataConnectionError.prototype);
    }
}