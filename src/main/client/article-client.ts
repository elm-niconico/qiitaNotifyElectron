import {getAsync} from "../http/http-client";
import JsonConverter from "../json/converter";
import {createApiToTagList} from "../tag/api-list";
import axios from "axios";
export interface TagJsonModel {
    followers_count: number;
    icon_url?: any;
    id: string;
    items_count: number;
}
const isTagJsonModel = (arg: any): boolean => {
    return arg !== null &&
        typeof arg === "object" &&
        typeof arg.id === "string";
}

export default class ArticleClient{
    extractTagList = async (tagName:string): Promise<TagJsonModel[]> => {
        const response = await axios.get(createApiToTagList(tagName));
        if(response === null)return []

        return isTagJsonModel(response.data)?
            [response.data as TagJsonModel]
           : response.data as TagJsonModel[]
    }
}
