import {Router, Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
import { RequestValidationError } from '../errors/request-validation';
import { DataConnectionError } from '../errors/database-connection-error';

const router = Router();

router.post('/api/users/signup',[
    body('email').isEmail().withMessage('이메일 형식을 확인해주세요'),
    body('password').trim().isLength({ min:5, max: 20}).withMessage('암호는 5~20자 사이여야 합니다.')
],
(req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array());
    }

    const {email, password} = req.body;

    console.log('Createing a user ...');
    throw new DataConnectionError();

    res.send({});

});

export {router as signupRouter};
