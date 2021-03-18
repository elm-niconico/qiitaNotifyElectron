import {FC} from "react";
import {Tag} from "./tag";
import {useRecoilState} from "recoil";
import {registeredTagListState, Select, selectState, tagListState} from "../root";
import {TagJsonModel} from "../../main/client/article-client";


const style = {
    border: "1px solid",
    margin: "5px",
    gridRow: "2",
    gridColumn: "2",
    display:"flex",
    flexWrap: "wrap",

}


export const TagList: FC<{tags:TagJsonModel[]}> = (tagListProps) => {


    return (
        // @ts-ignore
    <div id={"tag-list"} style={style}>
        <Tag followers_count={1} id={"aaa"} items_count={2}/>
        {tagListProps.tags.map(t => <Tag key={t.id}
                            followers_count={t.followers_count}
                            id={t.id}
                            items_count={t.items_count}
                            icon_url={t.icon_url} />)}
    </div>

    );
};



