import * as io from 'socket.io';
import http from 'http';

class SocketIO 
{
    static socketIO;

    static SocketIO(server: http.Server) 
    {
        this.socketIO = new io.Server(server);
        this.socketIO.on('listening', () =>
            console.log('WebSocket server running.')
        );
    }
}

// const SocketIO = (server: http.Server) => {
//     const io = new Server(server);
//     io.on('connect', (socket) => console.log('check', socket.connected));
// };

export default SocketIO;
