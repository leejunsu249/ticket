import express from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError, currentUser } from '@jsticket/common/build';
import { newOrderRouter } from './routes/new'
import { showOrderRouter } from './routes/show'
import { deleteOrderRouter } from './routes/delete'
import { indexOrderRouter } from './routes/index'

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test', //이 서버에서 요청할때만 쿠키 공유(true)
    })
);

app.use(currentUser);

app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(deleteOrderRouter);

app.get('*', async (req,res,next) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };