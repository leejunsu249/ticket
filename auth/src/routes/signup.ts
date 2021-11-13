import {Router, Request, Response} from 'express';
import {body, validationResult} from 'express-validator'
import {User} from '../models/user';
import { RequestValidationError } from '../errors/request-validation';


const router = Router();

router.post('/api/users/signup',[
    body('email').isEmail().withMessage('이메일 형식을 확인해주세요'),
    body('password').trim().isLength({ min:5, max: 20}).withMessage('암호는 5~20자 사이여야 합니다.')
],
 async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array());
    }

    const {email, password} = req.body;

    const exUser = await User.findOneAndDelete({ email });
    
    if(exUser){
        console.log('Email in use');
        return res.send({});
    }

    const user = User.build({email, password});
    await user.save();

    res.status(201).send(user);
});

export {router as signupRouter};
