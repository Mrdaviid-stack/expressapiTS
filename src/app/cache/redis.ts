import redisClient from 'redis';

const redis = redisClient.createClient({
    url: `redis://localhost:6379`
});

export class Redis 
{
    static get instance() 
    {
        redis.on('error', (err) => console.log('Redis CLient Error', err));
        return redis;
    }

    static async set(key: string, value: string) 
    {
        try 
        {
            value = typeof value === 'object' ? JSON.stringify(value) : value;
            await redis.set(key, value);
            return true;
        } 
        catch (error) 
        {
            console.error(error);
            console.error(`Failed to cache '${key}'`);
        }
    }

    static async get(key: string, asString: boolean) 
    {
        try 
        {
            let data = await redis.get(key);
            if (!data) return;

            const value = data.toString();
            return asString ? data : JSON.parse(value);
        } 
        catch (error) 
        {
            console.error(error);
            console.error(`Failed to get '${key}' from cache`);
        }
    }

    static async delete(key: string) 
    {
        try 
        {
            await redis.del(key);
            return true;
        } 
        catch (error) 
        {
            console.error(error);
            console.error(`Failed to delete ${key}`);
        }
    }

    static async flush() 
    {
        try 
        {
            await redis.FLUSHALL();
            return true;
        } 
        catch (error) 
        {
            console.error(error);
            console.error('Failed to refresh cache');
        }
    }
}
