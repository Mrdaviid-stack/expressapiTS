declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string | number;
            // ENVIRONMENT
            NODE_ENV: 'development' | 'staging' | 'production';
            // BASE URL
            BASE_URL: string;
            // Database
            DB_CLIENT: string;
            DB_HOST: string;
            DB_PORT: number;
            DB_USER: string;
            DB_PASS: string;
            DB_NAME: string;
            // BCRYPT
            SALT_ROUND: number;
            // JWT
            SECRET_TOKEN: string;
        }
    }
}

export interface UserCredential {
    username: string;
    password: string | number;
}

export interface Users {
    id: number;
    username: string;
    password: string;
}

export interface Token {
    token: string | number;
}
