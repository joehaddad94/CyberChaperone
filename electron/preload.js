const { contextBridge, ipcRenderer, ipcMain } = require('electron');

// contextBridge.exposeInMainWorld('ipcRenderer', {
//     send: (channel, data) => {

//         if (typeof channel !== 'string') {
//             console.error('Invalid channel type');
//             return;
//         }

//         if (data !== undefined) {
//             ipcRenderer.send(channel, data);
//             // console.log('ipcrenderer: ', channel, data)
//         } else {
//             ipcRenderer.send(channel);
//             console.log('ipcrenderer: ', channel)
//         }
//     },
//     on: (channel, listener) => {
//         if (typeof channel !== 'string' || typeof listener !== 'function') {
//             console.error('Invalid channel or listener');
//             return;
//         }
//         ipcRenderer.on(channel, listener);
//         console.log(listener)
//     },
// });

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        if (typeof channel !== 'string') {
            console.error('Invalid channel type');
            return;
        }

        if (data !== undefined) {
            ipcRenderer.send(channel, data);
        } else {
            ipcRenderer.send(channel);
        }
    },
    on: (channel, listener) => {
        if (typeof channel !== 'string' || typeof listener !== 'function') {
            console.error('Invalid channel or listener');
            return;
        }

        try {
            ipcRenderer.on(channel, listener);
        } catch (error) {
            console.error(`Error adding listener for channel ${channel}:`, error);
        }
    },
});

// ipcMain.on('login', () => {
//     createHomeWindow();
// });

// const io = require('socket.io-client');
// console.log(io);

// const serverURL = 'http://localhost:3000';

// const socket = io(serverURL);

// socket.on('connect', () => {
//   console.log('Connected to the Socket.IO server', socket.connected);

//   socket.emit("hello", "world");
// });

// socket.on('disconnect', () => {
//   console.log('Disconnected from the Socket.IO server');
// });

// ipcRenderer.on('emotion-data', (emotions) => {
//     console.log('Received emotion data in the renderer process:', emotions);
// });