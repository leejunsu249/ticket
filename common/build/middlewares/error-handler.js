"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var customError_1 = require("../errors/customError");
var errorHandler = function (err, req, res, next) {
    if (err instanceof customError_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.error(err);
    res.status(400).send({
        errors: [{ message: 'Something wrong' }]
    });
};
exports.errorHandler = errorHandler;
