import { CustomError } from "./customError";

export class NotAuthorizedError extends CustomError{
    statusCode = 401;
    reason = '로그인 정보 없음';

    constructor(){
        super('Not authorized');
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors(){
        return [
            { message: this.reason }
        ];
    }
}