import {DBResult, IDatabaseOperator} from "./i-tag-database";
import {TagModel} from "../tag/tag-model";
import {fetchTagModelFromJson, saveTagModelToJson} from "../json-client";

export class JsonLocalDatabase implements IDatabaseOperator{
    private _localTags: TagModel[]

    constructor(private _jsonPath: string) {
        this._localTags = fetchTagModelFromJson(_jsonPath);
    }

    close(): void {
        saveTagModelToJson(this._jsonPath, this._localTags);
    }

    add(tag: TagModel): DBResult {
        if(this.hasData(tag.id)) return 'DUPLICATE';
        this._localTags.push(tag);
        return 'SUCCESS';
    }

    delete(tagId: string): DBResult {
        if(! this.hasData(tagId)) return 'NOT_EXISTS';
        this._localTags = this._localTags.filter(tag => tag.id !== tagId);
        return 'SUCCESS';
    }

    hasData(tagId: string): boolean {
        const dataWhereTagId = this._localTags.filter(tag => tag.id === tagId);
        return dataWhereTagId.length > 0;
    }

    select(): TagModel[] | undefined {
        return this._localTags;
    }

    selectById(tagId: string): TagModel | undefined {
        return this._localTags.filter(tag => tag.id === tagId)[0];
    }

    update(oldTagId: string, newTag: TagModel): DBResult {
        return 'SUCCESS';
    }

}
