import * as ws from 'ws';
import http from 'http';

export class WebSocket 
{
    static webSocket;
    static WebSocket(server: http.Server) 
    {
        this.webSocket = new ws.Server({ server });
        this.webSocket.on('listening', () =>
            console.log('WebSocket server running.')
        );
    }
}

export default WebSocket;
