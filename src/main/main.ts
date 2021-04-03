// アプリケーション作成用のモジュールを読み込み
import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import {mainReloader, rendererReloader} from 'electron-hot-reload';
import {QiitaArticleJob} from "./job/QiitaArticleJob";
import {startJob} from "./main-ipc";
import {DatabaseFactory} from "./database/database-factory";

// const mainFile = path.join(app.getAppPath(), 'build', 'main.js');
// const rendererFile = path.join(app.getAppPath(), 'build', 'index.js');
// const preload = path.join(app.getAppPath(), 'build', 'preload.js');
//
// mainReloader(mainFile, undefined, (__, _) => {
//     console.log("It is a main'AAs process hook!");
// });
//
// rendererReloader(rendererFile, undefined, (__, _) => {
//     console.log("It is a renderer's process hook!");
// });
//
// rendererReloader(preload, undefined, () => {
//     console.log("preload");
// });


let mainWindow : BrowserWindow;
const createWindow = () => {
    // メインウィンドウを作成します
    mainWindow = new BrowserWindow({
        titleBarStyle: "hidden",
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        },
        width: 1000, height: 800,
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html')).catch(e => console.log(e));
    // デベロッパーツールの起動
    //mainWindow.webContents.openDevTools();
}
export const miniumWindow = () => {
    mainWindow.minimize();
}

export const maxWindow = () => {
    mainWindow.maximize();
}

export const closeWindow = () => {
    mainWindow.close();
}



app.setAppUserModelId(process.execPath);
app.whenReady().then(createWindow)


const db = DatabaseFactory.factoryDataBase('JSON');
startJob(db);
const job = new QiitaArticleJob(1, db);
job.runAsync().catch(e => console.log(e));
// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
    db.close();

    // macOSのとき以外はアプリケーションを終了させます
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
