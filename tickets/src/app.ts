import express from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError } from '@jsticket/common/build';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test', //이 서버에서 요청할때만 쿠키 공유(true)
    })
);


app.get('*', async (req,res,next) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };