const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path')

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        center: true,
        kiosk: !isDev,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
    });
    mainWindow.setMenu(null);
    if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
    }

    mainWindow.on('closed', () => {
        mainWindow = undefined;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow !== null) {
        createWindow();
    }
});