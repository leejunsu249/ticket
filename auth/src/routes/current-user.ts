import {Router} from 'express';

const router = Router();

router.get('/api/users/currentUser', (req, res) => {
    res.send('Hi there!');

});

export {router as currentUserRouter};

