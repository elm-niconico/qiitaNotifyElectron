import {DatabaseFactory} from "../src/main/database/database-factory";
import {JsonLocalDatabase} from "../src/main/database/json-local-database";
import * as path from "path";

describe('JsonLocalTags', ()=>{

    test("一件のデータを追加する", ()=>{
        const db = new JsonLocalDatabase("undefined.json");
        const tag = {id: "java", updateAt: new Date()};
        const actual = db.add(tag);
        expect(actual).toBe('SUCCESS');
        expect(db.selectById('java')).toStrictEqual(tag);
    });

    test('データが重複する', ()=> {
        const db = new JsonLocalDatabase('undefined.json');
        const tag = {id: "java", updateAt: new Date()};
        const tag2 = {id: "java", updateAt: new Date(2011, 11,10)};

        const success = db.add(tag);
        expect(success).toBe('SUCCESS');

        const failed = db.add(tag2);
        expect(failed).toBe('DUPLICATE');
    });

    test("jsonファイルに既に", ()=>{
        const db = new JsonLocalDatabase(path.join(__dirname,"test-json.json"));
        const tag = {id: "JAVA", updateAt: new Date()};
        const actual = db.add(tag);
        expect(actual).toBe('DUPLICATE');
    });


    test('１件のデータを登録してからそのデータが登録されているか確認', ()=>{
        const db = new JsonLocalDatabase('');
        const model = {id:"java", updateAt: new Date()};
        db.add(model);
        const java = db.selectById("java");
        expect(java).toStrictEqual(model);

        const all = db.select();
        expect(all).toStrictEqual([model]);
    });


    test("一件のデータを削除", ()=>{
        const db = new JsonLocalDatabase("");
        db.add({id: "java", updateAt: new Date()});

        db.delete("java");
        expect(db.selectById("java")).toBeUndefined();
    });
    test("存在しないデータを削除", ()=>{
        const db = new JsonLocalDatabase("");

        const failed = db.delete("java");
        expect(failed).toBe('NOT_EXISTS');
        expect(db.selectById("java")).toBeUndefined();
    });
});
