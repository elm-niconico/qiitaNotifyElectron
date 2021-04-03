import {NetworkTagJsonModel} from "../src/main/tag/tag-model";
import {convertToTagsJsonModel} from "../src/main/tag/converter";
import {JsonLocalDatabase} from "../src/main/database/json-local-database";
import * as path from "path";

describe("convertTest", ()=>{
    test("タグが一件", ()=> {
        const json = {"followers_count":0,"icon_url":null,"id":"django-prometheus","items_count":1};
        const model: NetworkTagJsonModel[] | undefined = convertToTagsJsonModel(json);
        const ex = [json];
        expect(model).not.toBeUndefined();
        expect(model).toStrictEqual(ex);
    });
    test("タグが2件", ()=> {
        const json = [{"followers_count":0,"icon_url":null,"id":"arctan","items_count":1},{"followers_count":0,"icon_url":null,"id":"django-prometheus","items_count":1}];
        const model: NetworkTagJsonModel[] | undefined = convertToTagsJsonModel(json);

        expect(model).not.toBeUndefined();
        expect(model).toStrictEqual(json);
    });

    test('2県のデータを読み込める', ()=> {
        const model = [{"id": "python", "updateAt": new Date("2021-04-02T16:55:47.303Z")}, {"id": "java", updateAt: undefined}, {
            "id": "Rust",
            "updateAt": new Date("2022-04-02T16:55:47.303Z")
        }];
        const db = new JsonLocalDatabase(path.join(__dirname, "test2-json.json"));
        const tags = db.select();
        expect(tags).toStrictEqual(model);

        const python = db.selectById("python");
        expect(python).toStrictEqual({"id": "python", "updateAt": new Date("2021-04-02T16:55:47.303Z")});

        const Rust = db.selectById("Rust");
        expect(Rust).toStrictEqual({
            "id": "Rust",
            "updateAt":  new Date("2022-04-02T16:55:47.303Z")
        });

    } );
});
