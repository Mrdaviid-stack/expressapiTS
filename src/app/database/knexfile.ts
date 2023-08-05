import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../.env' });
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        },
    },

    staging: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        },
    },

    production: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        },
    },
};

export default config;
