import {TagModel} from "../tag/tag-model";
import {DBResult, IDatabaseOperator} from "./i-tag-database";



export class MockTagDatabase implements IDatabaseOperator{
    private  readonly memory = new Map<string, TagModel>();

    private constructor() {
    }
    static readonly  instance = new MockTagDatabase();



    add(tag: TagModel): DBResult{
        if(this.hasData(tag.id)) return 'DUPLICATE';
        this.memory.set(tag.id, tag);

        return 'SUCCESS';
    }

    delete(tagId: string): DBResult {
        if(!this.hasData(tagId)) return 'NOT_EXISTS';

        this.memory.delete(tagId);
        return 'SUCCESS';
    }

    select(): TagModel[]|undefined{

        const models: TagModel[] = []
        this.memory.forEach(m => models.push(m));

        return models;
    }

    selectById(tagId: string): TagModel|undefined {
        return this.memory.get(tagId);
    }

    update(oldTagId: string, newTag: TagModel): DBResult {
        if(this.hasData(newTag.id)) return 'DUPLICATE'
        if(!this.hasData(oldTagId)) return 'NOT_EXISTS';

        this.memory.delete(oldTagId)
        this.memory.set(newTag.id, newTag);

        return 'SUCCESS';

    }

    hasData(tagId: string): boolean {
        return this.selectById(tagId) !== undefined
    }

    close(): void {
    }

}
