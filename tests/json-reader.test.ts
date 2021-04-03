import {TagModel} from "../src/main/tag/tag-model";
import {fetchTagModelFromJson} from "../src/main/json-client";
import autoMockOff = jest.autoMockOff;
import {Tag} from "../src/main/job/qiita-article-json-model";

describe("JSONReder", ()=>{

    test("一つのmodelを読み込む", ()=>{
        const actual: TagModel[] = fetchTagModelFromJson(__dirname + "/test-json.json");
        expect(actual).toStrictEqual([{id: "JAVA", updateAt: new Date("2021-04-02T16:55:47.303Z")}]);
    });
    test("複数のmodelを読み込む", ()=>{
        const model: TagModel[] = [
            {
                id: "python",
                updateAt: new Date("2021-04-02T16:55:47.303Z"),
            },
            {
                id: "java",
                updateAt: undefined
            },
            {
                id: "Rust",
                updateAt: new Date("2022-04-02T16:55:47.303Z")
            }
        ]
        const actual: TagModel[] = fetchTagModelFromJson(__dirname + "/test2-json.json");
        expect(actual).toStrictEqual(model);
    });
    test("存在しないJsonを読み込む", ()=>{
        const actual: TagModel[] = fetchTagModelFromJson(__dirname + "/undefined.json");
        expect(actual).toStrictEqual([]);
    });

});
