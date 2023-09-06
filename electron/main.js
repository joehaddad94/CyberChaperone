const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let loginWindow;

function createMainWindow() {
    loginWindow = new BrowserWindow({
        title: 'CyberChaperone',
        width: isDev ? 1000 : 500,
        height: 600,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            hardwareAcceleration: false,
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
        width: isDev ? 1500 : 1000,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js'),
        }
    })

    //Open DevTools if in dev environment
    if (isDev) {
        homeWindow.webContents.openDevTools();
    }

    homeWindow.loadFile(path.join(__dirname, './home/index.html'));

    
}

ipcMain.on('login', () => {
    createHomeWindow();
});

ipcMain.on('close-login-window', () => {
    if (loginWindow) {
        loginWindow.close();
        loginWindow = null;
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