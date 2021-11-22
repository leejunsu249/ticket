import {Router} from 'express';
import { currentUser } from '@jsticket/common/build';
const router = Router();

router.get('/api/users/currentUser',currentUser, (req, res) => {
    res.send({currentUser: req.currentUser || null});
});

export {router as currentUserRouter};

