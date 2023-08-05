import { createServer } from 'http';
import createHttpError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { Model } from 'objection';

// ENV
import 'dotenv/config';

// CONNECTION
import connection from './app/config/connection';

// MIDDLEWARE
import cors from './app/middleware/cors';
import logger from './app/middleware/logger';

// CONFIG
import router from './app/config/router';

// OBJECTION
Model.knex(connection);

const app: Application = express();
const api = createServer(app);
const PORT: number = Number(process.env.PORT);

app.use(helmet());
app.use(cors);
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('index'));
app.use('/', router);

app.use((request: Request, response: Response, next: NextFunction) => {
    createHttpError();
    next();
});

api.listen(PORT || 80, () => console.log(`API is running on PORT: ${PORT}`));
