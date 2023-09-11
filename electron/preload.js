const { contextBridge, ipcRenderer, remote } = require('electron');

let loginWindowId;

ipcRenderer.on('set-window-id', (event, id) => {
    loginWindowId = id;
});

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
});