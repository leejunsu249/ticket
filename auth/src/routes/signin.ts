import {Router, Request, Response} from 'express';
import {body} from 'express-validator';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { validateRequest, BadRequestError} from '@jsticket/common/build'

const router = Router();

router.post('/api/users/signin', [
    body('email').isEmail().withMessage('이메일 형식을 확인해주세요'),
    body('password').trim().notEmpty().withMessage('비밀번호를 입력해 주세요')
],
validateRequest,
async (req: Request, res: Response) => {
 
    const {email, password} = req.body;

    const exUser = await User.findOne({email});
    if(!exUser){
        throw new BadRequestError('가입되지 않은 이메일 입니다.');
    }

    if(exUser.password == password){
        const userJwt = jwt.sign({id: exUser.id, email: exUser.email}, process.env.JWT_KEY!);
        req.session = { jwt: userJwt };

    }else{
        throw new BadRequestError('잘못된 비밀번호 입니다.');
    }
    
    res.status(201).send(exUser);
});

export {router as signinRouter};

