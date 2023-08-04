import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
    try {
        response.send('Pages');
    } catch (error) {
        console.log(error)
        response.sendStatus(500);
    }
})

export default Router().use('/pages', router);