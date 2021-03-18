import JsonConverter from "../src/main/json/converter";

import {TagJsonModel} from "../src/main/client/article-client";

describe('Jsonのコンバート処理', ()=>{
    test('一つだけのタグのJson', () => {
        const jc = new JsonConverter();
        const json = "{\"followers_count\":0,\"icon_url\":null,\"id\":\"LateralMovement\",\"items_count\":1}"
        const actual: TagJsonModel[] = jc.convertToTagListModel(json);
        const expectModel:TagJsonModel = { followers_count:0, icon_url:null, id: "LateralMovement", items_count:1}
        expect(actual[0]).toStrictEqual(expectModel);
    });
    test('配列型のタグのJson', () => {
        const jc = new JsonConverter();
        const json = "[{\"followers_count\":0,\"icon_url\":null,\"id\":\"LateralMovement\",\"items_count\":1}]"
        const actual: TagJsonModel[] = jc.convertToTagListModel(json);
        const expectModel:TagJsonModel = { followers_count:0, icon_url:null, id: "LateralMovement", items_count:1}
        expect(actual[0]).toStrictEqual(expectModel);
    });
    test('複数のタグ', () => {
        const jc = new JsonConverter();
        const json = "[{\"followers_count\":0,\"icon_url\":null,\"id\":\"LateralMovement\",\"items_count\":1},{\"followers_count\":0,\"icon_url\":null,\"id\":\"LateralMovement\",\"items_count\":1}]"
        const actual: TagJsonModel[] = jc.convertToTagListModel(json);
        const expectModel:TagJsonModel = { followers_count:0, icon_url:null, id: "LateralMovement", items_count:1}
        expect(actual[0]).toStrictEqual(expectModel);
        expect(actual[1]).toStrictEqual(expectModel);
    });

});


