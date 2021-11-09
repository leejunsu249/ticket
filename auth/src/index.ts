import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';


import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get('*', async (req,res,next) => {
    throw new NotFoundError();
});

app.use(errorHandler);

const connect = async () => {
    try{
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth');
        console.log('connected to Mongodb');
    } catch(err){
        console.error(err);
    }
        app.set('port',3000);
        app.listen(app.get('port'), () => {
        console.log('Listening on port',app.get('port'));
    });
};

