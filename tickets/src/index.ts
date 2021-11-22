import mongoose from 'mongoose';
import { app } from './app';

const connect = async () => {
    if(!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
    try{
        await mongoose.connect('mongodb://auth-mongo-svc:27017/auth');
        console.log('connected to Mongodb');
    } catch(err){
        console.error(err);
    }
        app.set('port',3001);
        app.listen(app.get('port'), () => {
        console.log('Listening on port',app.get('port'));
    });
};

connect();

