const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');
const io = require('socket.io-client');

// process.env.NODE_ENV = 'production';
process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let loginWindow;
let homeWindow;

async function makeRequest(method, url, data = null) {
    try {
      let response;
  
      if (method === 'GET') {
        response = await axios.get(url);
      } else if (method === 'POST') {
        response = await axios.post(url, data);
      } else {
        throw new Error('Unsupported HTTP Method');
      }
  
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Server error:', error.response.status, error.response.data);
        throw new Error('Server error');
      } else if (error.request) {
        console.error('No response from server');
        throw new Error('No response from server');
      } else {
        console.error('Request error:', error.message);
        throw new Error('Request error');
      }
    }
  }

function createMainWindow() {
    loginWindow = new BrowserWindow({
        title: 'CyberChaperone',
        width: isDev ? 1000 : 450,
        height: 650,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            hardwareAcceleration: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, './preload.js'),
        }
    });

    //Open DevTools if in dev environment
    if (isDev) {
        loginWindow.webContents.openDevTools();
    }

    loginWindow.loadFile(path.join(__dirname, './login/index.html'));
    
}

//Create Home Window
function createHomeWindow() {
    const homeWindow = new BrowserWindow({
        title: 'CyberChaperone',
        width: isDev ? 1500 : 1300,
        height: 725,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, './preload.js'),
        }
    })

    //Open DevTools if in dev environment
    if (isDev) {
        homeWindow.webContents.openDevTools();
    }

    homeWindow.loadFile(path.join(__dirname, './home/index.html'));
    
}

ipcMain.on('login', async (event, credentials) => {
    console.log(credentials)
    const URL = 'http://127.0.0.1:8000/api/app_login'

    try {
        const response = await makeRequest('POST', URL, {
            username: credentials.usernameValue,
            password: credentials.passwordValue,
        });
        console.log('Response:', response);
        event.sender.send('login-response', response);
      } catch (error) {
        console.error('Error:', error.message);
      }
    // createHomeWindow();
});

ipcMain.on('close-login-window', () => {
    if (loginWindow) {
        loginWindow.close();
        loginWindow = null;
    }
});

ipcMain.on('logout', () => {
    console.log('Ipc main entered')
    if (homeWindow) {
        homeWindow.close();
        homeWindow = null;
        createMainWindow();
    }
});



app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
      })
})

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
  })

  //Socket.io Client Server Connection
  const serverURL = 'http://localhost:3000';
  const socket = io(serverURL);
  
  socket.on('connect', () => {
    console.log('Connected to the Socket.IO server', socket.connected);
    
    ipcMain.on('emotion-data', (event, emotions) => {
        console.log('Received emotion data in the renderer process:', emotions);
        socket.emit('emotions-data', emotions);
    });
  });
  
  socket.on('disconnect', () => {
    console.log('Disconnected from the Socket.IO server');
  });