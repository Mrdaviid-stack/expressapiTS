export {};
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
            // MAIL
            SMTP_HOST: string
            SMTP_PORT: number
            SMTP_TLS: boolean
            SMTP_USERNAME: string
            SMTP_PASSWORD: string
            SMTP_SENDER: string
        }
    }
}
