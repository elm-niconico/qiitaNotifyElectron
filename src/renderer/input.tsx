import {FC, useState} from "react";
import {SetterOrUpdater, useRecoilState} from "recoil";
import ArticleClient, {TagJsonModel} from "../main/client/article-client";


const style = {
    gridRow: 1,
    gridColumn: 2
}


export const Input: FC<{setTags: SetterOrUpdater<TagJsonModel[]>}> = (props) => {

    const [text, setText] = useState("");

    let client : ArticleClient|null = null
    //@ts-ignore
    client = window.client;

    const searchTagList = async (tagName: string) => client?.extractTagList(tagName)
            .then(e => props.setTags(_ => e))
            .catch(e => console.log(e));

    return (
        <div id={"input"} style={style}>
            <input type={"text"}
                   value={text}
                   onChange={(text) =>setText(_=> text.target.value)}/>
            <button onClick={() => searchTagList(text)}>検索</button>
        </div>
    );
}
