const { app, BrowserWindow } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow() {
    const loginWindow = new BrowserWindow({
        title: 'CyberChaperone',
        width: isDev ? 1000 : 500,
        height: 600
    });

    //Open DevTools if in dev environment
    if (isDev) {
        loginWindow.webContents.openDevTools();
    }

    loginWindow.loadFile(path.join(__dirname, './login/index.html'));
}

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