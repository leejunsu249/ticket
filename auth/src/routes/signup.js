"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var request_validation_1 = require("../errors/request-validation");
var database_connection_error_1 = require("../errors/database-connection-error");
var router = (0, express_1.Router)();
exports.signupRouter = router;
router.post('/api/users/signup', [
    (0, express_validator_1.body)('email').isEmail().withMessage('이메일 형식을 확인해주세요'),
    (0, express_validator_1.body)('password').trim().isLength({ min: 5, max: 20 }).withMessage('암호는 5~20자 사이여야 합니다.')
], function (req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new request_validation_1.RequestValidationError(errors.array());
    }
    var _a = req.body, email = _a.email, password = _a.password;
    console.log('Createing a user ...');
    throw new database_connection_error_1.DataConnectionError();
    res.send({});
});
