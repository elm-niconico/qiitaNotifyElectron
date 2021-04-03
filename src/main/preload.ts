import {contextBridge, ipcRenderer} from 'electron';


contextBridge.exposeInMainWorld(
    'selectAll',
    async () => await ipcRenderer.invoke("selectAll")
);
contextBridge.exposeInMainWorld(
    'addTag',
    async (tagId: string) => await ipcRenderer.invoke("addTag", tagId)
);

contextBridge.exposeInMainWorld(
    'fetchTags',
    async (tags?: string) => await ipcRenderer.invoke("fetchTags", tags)
);

contextBridge.exposeInMainWorld(
    'deleteTag',
    async (tagId: string) => await ipcRenderer.invoke("deleteTag", tagId)
);


contextBridge.exposeInMainWorld(
    'appQuit',
    async () => await ipcRenderer.invoke("app-quit")
);
contextBridge.exposeInMainWorld(
    'windowMax',
    async () => await ipcRenderer.invoke("windowMax")
);
contextBridge.exposeInMainWorld(
    'windowMin',
    async () => await ipcRenderer.invoke("windowMin")
);
