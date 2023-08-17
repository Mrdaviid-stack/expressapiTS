import morgan, { Morgan } from 'morgan';
import chalk from 'chalk';
import timezone from 'moment-timezone';

const FORMAT = 'YYYY-MM-DD HH:mm:ss'

const logger = morgan((tokens, request, response) => 
{
    return [
        chalk.yellowBright(`[${timezone().tz('Asia/Manila').format(FORMAT)}]`),
        chalk.cyanBright(tokens.method(request, response)),
        chalk.yellow(tokens.status(request, response)),
        chalk.white(tokens.url(request, response)),
        `(${chalk.greenBright(tokens['response-time'](request, response) + ' ms')})`,
        `Remote IP: ${chalk.blueBright(tokens['remote-addr'](request, response))}`,
        `| User-agent: ${chalk.blueBright(tokens['user-agent'](request, response))}`,
    ].join(' ');
})

export default logger;