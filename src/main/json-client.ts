import * as fs from "fs";
import {TagModel} from "./tag/tag-model";

export const fetchTagModelFromJson = (jsonPath: string): TagModel[] => {
    try{
        const obj = fs.readFileSync(jsonPath, "utf-8");
        const json = JSON.parse(obj);
        return (json as TagModel[]).map(t => {
            //実態がString型になるため、Date型に直す
            t.updateAt = (t.updateAt === undefined)? undefined :  new Date(t.updateAt.toString())
            return t;
        });
    }catch (e){
        return [];
    }
}

export const saveTagModelToJson = (filePath: string, tags: TagModel[]) =>{
    try{
        console.log("AAA")
        fs.writeFileSync(filePath, JSON.stringify(tags));
    }catch (e){
        console.log(e);
    }
}
