import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mail', (request: Request, response: Response) =>
{
    try 
    {
        //response.json(await mailService.sendMail());
    } 
    catch (error) 
    {
        console.log(error);
        response.sendStatus(500);
    }
});

export default router;