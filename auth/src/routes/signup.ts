import {Router, Request, Response} from 'express';
import {body} from 'express-validator'
import jwt from 'jsonwebtoken';
import {User} from '../models/user';
import {BadRequestError} from '../errors/badRequestError';
import { validateRequest} from "../middlewares/validate-request"

const router = Router();

router.post('/api/users/signup',[
    body('email').isEmail().withMessage('이메일 형식을 확인해주세요'),
    body('password').trim().isLength({ min:5, max: 20}).withMessage('암호는 5~20자 사이여야 합니다.')
],
validateRequest,
 async (req: Request, res: Response) => {

    const {email, password} = req.body;

    const exUser = await User.findOne({ email });
    
    if(exUser){
        throw new BadRequestError('사용중인 이메일 입니다.');
    }

    const user = User.build({email, password});
    await user.save();

    // kubectl create secret generic jwt-secret --from-literal=JWT_KEY=ticket
    const userJwt = jwt.sign({id: user.id, email: user.email}, process.env.JWT_KEY!);
    req.session = { jwt: userJwt };
    
    res.status(201).send(user);
});

export {router as signupRouter};
