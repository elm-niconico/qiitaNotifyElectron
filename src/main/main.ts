// アプリケーション作成用のモジュールを読み込み
import {app, BrowserWindow} from 'electron';
import path from 'path';
import { mainReloader, rendererReloader } from 'electron-hot-reload';


const mainFile = path.join(app.getAppPath(), 'build', 'main.js');
const rendererFile = path.join(app.getAppPath(), 'build', 'index.js');

mainReloader(mainFile, undefined, (error, path) => {
    console.log("It is a main'AAs process hook!");
});

rendererReloader(rendererFile, undefined, (error, path) => {
    console.log("It is a renderer's process hook!");
});


const createWindow = () => {
    // メインウィンドウを作成します
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        },
        width: 1000, height: 800,
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html')).catch(e => console.log(e));
    // デベロッパーツールの起動
    mainWindow.webContents.openDevTools();
}

app.setAppUserModelId(process.execPath);
app.whenReady().then(createWindow)
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {


    // macOSのとき以外はアプリケーションを終了させます
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
