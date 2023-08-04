import { createServer } from 'http';
import createHttpError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';

// MIDDLEWARE
import cors from './app/middleware/cors';
import logger from './app/middleware/logger';

// CONFIG
import router from './app/config/router';

const app: Application = express();
const api = createServer(app);
const PORT: number = Number(process.env.PORT);

app.use(helmet());
app.use(cors);
app.use(logger);
app.get('/', (req, res) => res.send('test'));
app.use('/', router);

app.use((request: Request, response: Response, next: NextFunction) => {
    createHttpError();
    next();
});

api.listen(PORT || 80, () => console.log(`API is running on PORT: ${PORT}`));
