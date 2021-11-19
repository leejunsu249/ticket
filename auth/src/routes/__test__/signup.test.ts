import request from 'supertest';
import {app} from '../../app'

it('returns a 201 on successful signup', async ()=> {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'hello123'
        })
        .expect(201);
});

it('returns a 400 with an invalid email', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'testasd',
        password: 'hello123'
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'qw1'
    })
    .expect(400);
});

it('returns a 400 with an missing email and password', async () => {
    await  request(app)
    .post('/api/users/signup')
    .send({
        email: 'testasd@test.com',
    })
    .expect(400);
    
    await request(app)
    .post('/api/users/signup')
    .send({
        password: 'qw1asdasd'
    })
    .expect(400);
});

it('disallows duplicate email', async () => {

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'hello123'
    })
    .expect(201);

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'hello123'
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {

    const response = await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'hello123'
    })
    .expect(201);

    expect (response.get('Set-Cookie')).toBeDefined();
});