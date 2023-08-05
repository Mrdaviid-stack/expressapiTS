import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

describe('Test Pages', () => {
    test('Pages', async () => {
        const res = await request(process.env.BASE_URL).get('/pages');
        expect(res.body).toEqual({ message: 'Pages' });
    });
});
