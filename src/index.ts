import { createServer } from 'http';
import createHttpError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import helmet from 'helmet';
import { Model } from 'objection';

// SWAGGER SPEC
import swaggerSpec from './modules/swagger';

// LISTENERS
import SocketIO from './app/listeners/socketIO';
import WebSocket from './app/listeners/websocket';

// ENV
import 'dotenv/config';

// CONNECTION
import connection from './app/config/connection';

// MIDDLEWARE
import cors from './app/middleware/cors';
import logger from './app/middleware/logger';

// CONFIG
import router from './app/config/router';

// OBJECTION ORM
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
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use((request: Request, response: Response, next: NextFunction) => {
    createHttpError();
    next();
});

SocketIO.SocketIO(api);
WebSocket.WebSocket(api);
api.listen(PORT || 80, () => console.log(`API is running on PORT: ${PORT}`));
