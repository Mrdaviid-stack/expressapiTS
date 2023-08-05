import { Router, Request, Response } from 'express';

import AuthService from './auth.service';

import { Conflic } from '../../app/errors/error-handler'

const router = Router();

router.post('/sign-in', async (request: Request, response: Response) => {
    console.log(request.body)
    let { identity, password } = request.body;
    try {
        response.send(await AuthService.signIn(identity, password));
    } catch (error) {
        if (error instanceof Conflic)
            return response.sendStatus(409)
        console.log(error)
        response.sendStatus(500);
    }
})

export default Router().use('/auth', router);