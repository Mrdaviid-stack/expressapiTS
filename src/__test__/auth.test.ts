import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

describe('Test Auth', () => {
    test('Authentication', async () => { 
        const res = await request(process.env.BASE_URL)
            .post('/auth/sign-in')
            .send({ identity: 'admin', password: 'sa' });
        expect(res.statusCode).toBe(200);
    })
})