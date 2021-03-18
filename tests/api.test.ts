import {createApiToTagList} from "../src/main/tag/api-list";


describe('QiitaのAPIを作成する', ()=>{
    test('タグ指定がからだった時', ()=>{
        const api = createApiToTagList('');
        expect(api).toBe('https://qiita.com/api/v2/tags');
    });
    test('タグ指定があったとき', ()=>{
        const api = createApiToTagList('java');
        expect(api).toBe('https://qiita.com/api/v2/tags/java');
    });
});
