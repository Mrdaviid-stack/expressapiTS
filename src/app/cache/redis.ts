import { createClient } from 'redis';

const redis = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    },
});

export class Redis {
    static get instance() {
        redis.on('error', (err) => console.log('Redis CLient Error', err));
        return redis;
    }

    static async set(key: string, value: string) {
        try {
            value = typeof value === 'object' ? JSON.stringify(value) : value;
            await redis.set(key, value, { EX: 0 });
            return true;
        } catch (error) {
            console.error(error);
            console.error(`Failed to cache '${key}'`);
        }
    }

    static async get(key: string, asString: boolean) {
        try {
            let data = await redis.get(key);
            if (!data) return;

            data = data.toString();
            return asString ? data : JSON.parse(data);
        } catch (error) {
            console.error(error);
            console.error(`Failed to get '${key}' from cache`);
        }
    }

    static async delete(key: string) {
        try {
            await redis.del(key);
            return true;
        } catch (error) {
            console.error(error);
            console.error(`Failed to delete ${key}`);
        }
    }

    static async flush() {
        try {
            await redis.flushAll();
            return true;
        } catch (error) {
            console.error(error);
            console.error('Failed to refresh cache');
        }
    }
}
