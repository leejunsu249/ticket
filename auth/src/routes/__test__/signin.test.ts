import request from 'supertest';
import {app} from '../../app'

it('email does not exist is supplied', async ()=> {
    await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'hello123'
        })
        .expect(400);
});

it('incorrect password is supplied', async ()=> {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'hello123'
        })
        .expect(201);

        await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'asdfdas'
        })
        .expect(400);
});

it('responds with a cookie when after signingin', async ()=> {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'hello123'
        })
        .expect(201);

        const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'test@test.com',
            password: 'hello123'
        })
        .expect(201);
        
        expect (response.get('Set-Cookie')).toBeDefined(); // 쿠키(jwt) 확인
});