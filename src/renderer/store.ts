import {atom} from 'recoil';
import {NetworkTagJsonModel, TagModel} from "../main/tag/tag-model";

//@ts-ignore
export const selectDbTag: ()=>Promise<TagModel[]> = () =>  window.selectAll();

//@ts-ignore
export const addTag: (tagId: string) => Promise<void>  = (tagId) =>　window.addTag(tagId);

//@ts-ignore
export const deleteTag: (tagId: string)=>Promise<void> = (tagId) => window.deleteTag(tagId);

//@ts-ignore
export const appQuit: ()=>Promise<void> = window.appQuit;
//@ts-ignore
export const windowMax: ()=>Promise<void> = window.windowMax;
//@ts-ignore
export const windowMin: ()=>Promise<void> = window.windowMin;


export type SWITCH_TAG_LIST_TYPE = "DB" | "NET";


//=================== Network上からデータを取得

//@ts-ignore
export const fetchTag: (tags?: string) => Promise<NetworkTagJsonModel[]> = (tags) => window.fetchTags(tags);

// ========================================= STATE ====================================================
export const dbTagListAtomState = atom<TagModel[]>({
    key: "select-tag",
    default: [],
});

export const netTagListAtomState = atom<TagModel[]>({
    key: "net-tag-list",
    default: []
});

export const switchTagListAtomState = atom<SWITCH_TAG_LIST_TYPE>({
    key: "switch_tag_list",
    default: "DB"
})
