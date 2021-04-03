import {IDatabaseOperator} from "./i-tag-database";
import {MockTagDatabase} from "./mock-tag-database";

import {JsonLocalDatabase} from "./json-local-database";
import path from "path";

export type DBType = 'MOCK' | 'JSON';

export class DatabaseFactory{
    static factoryDataBase(dbType: DBType): IDatabaseOperator{
        switch (dbType){
            case 'MOCK':
                return MockTagDatabase.instance;
            case 'JSON' :
                return new JsonLocalDatabase(path.join(process.env.APPDATA??"", "tag-list.json"));
        }
        throw new Error("定義されていません");
    }
}
