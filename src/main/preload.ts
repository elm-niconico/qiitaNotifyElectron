import {  contextBridge } from 'electron';
import ArticleClient from "./client/article-client";

contextBridge.exposeInMainWorld(
    'client',
    new ArticleClient()
);
