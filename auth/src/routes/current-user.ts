import {Router} from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/api/users/currentUser', (req, res) => {
    if( !req.session || !req.session.jwt ){
        return res.send({ currentUser: null});
    }

});

export {router as currentUserRouter};

