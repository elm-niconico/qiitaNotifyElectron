import {TagModel} from "../tag/tag-model";




export type DBResult = 'SUCCESS' | 'DUPLICATE' | 'NOT_EXISTS';

export interface IDatabaseOperator{
    add(tag: TagModel): DBResult
    delete(tagId: string): DBResult
    update(oldTagId:string, newTag: TagModel): DBResult
    select(): TagModel[]|undefined;
    selectById(tagId: string): TagModel|undefined;
    hasData(tagId: string): boolean;
    close(): void;
}
