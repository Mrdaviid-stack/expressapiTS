import { Router, Request, Response } from 'express';

const router = Router();

router.post('/sign-in', (request: Request, response: Response) => {
    try {
        response.send('Auth');
    } catch (error) {
        console.log(error)
        response.sendStatus(500);
    }
})

export default Router().use('/auth', router);