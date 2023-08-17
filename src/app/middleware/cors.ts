import cors, { CorsOptions } from 'cors';

const whitelist = process.env.WHITELIST?.split(',');
const options: CorsOptions = 
{
    origin: (origin, callback) => 
    {
        if (whitelist?.indexOf(origin) !== -1) 
        {
            callback(null, true)
        } 
        else 
        {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

export default cors(options);