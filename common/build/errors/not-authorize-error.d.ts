import { CustomError } from "./customError";
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
