const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {

        if (typeof channel !== 'string') {
            console.error('Invalid channel type');
            return;
        }

        if (data !== undefined) {
            ipcRenderer.send(channel, data);
            // console.log('ipcrenderer: ', channel, data)
        } else {
            ipcRenderer.send(channel);
            console.log('ipcrenderer: ', channel)
        }
    },
    on: (channel, listener) => {
        if (typeof channel !== 'string' || typeof listener !== 'function') {
            console.error('Invalid channel or listener');
            return;
        }
        ipcRenderer.on(channel, listener);
    },
});


const io = require('socket.io-client');
console.log(io);

const serverURL = 'http://localhost:3000';

const socket = io(serverURL);
console.log(socket)

socket.on('connect', () => {
  console.log('Connected to the Socket.IO server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from the Socket.IO server');
});