const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, data) => {
        if (typeof channel !== 'string') {
            console.error('Invalid channel type');
            return;
        }

        if (data !== undefined) {
            ipcRenderer.send(channel, data);
            // console.log('channel, data',channel, data)
        } else {
            ipcRenderer.send(channel);
            // console.log('channel', channel)

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
