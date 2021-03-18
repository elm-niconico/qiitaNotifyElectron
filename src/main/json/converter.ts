import {TagJsonModel} from "../client/article-client";

export default class JsonConverter{
    convertToTagListModel =  (json: string): TagJsonModel[] =>
        (json.startsWith("{"))?
            [JSON.parse(json) as TagJsonModel]
          :  JSON.parse(json) as TagJsonModel[];
}
