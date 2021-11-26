import mongoose from 'mongoose';
import { app } from './app';

const connect = async () => {
    if(!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }
    if(!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to Mongodb');
    } catch(err){
        console.error(err);
    }
        app.set('port',3000);
        app.listen(app.get('port'), () => {
        console.log('Listening on port',app.get('port'));
    });
};

connect();

