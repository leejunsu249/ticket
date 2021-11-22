import { CustomError } from "./customError";

export class DataConnectionError extends CustomError{
    statusCode = 500;
    reason = 'db 접속 실패';

    constructor(){
        super('Error connecting to db');
        Object.setPrototypeOf(this, DataConnectionError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.reason }
        ];
    }
}