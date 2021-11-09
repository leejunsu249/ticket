import { CustomError } from "./CustomError";

export class DataConnectionError extends CustomError{
    statusCode = 500;
    reason = 'db 접속 실패';

    constructor(){
        super();
        Object.setPrototypeOf(this, DataConnectionError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.reason }
        ];
    }
}