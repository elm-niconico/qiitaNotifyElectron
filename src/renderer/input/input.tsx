import {FC, useState} from "react";
import {useRecoilState} from "recoil";
import {tagListState} from "../root";
import ArticleClient from "../../main/client/article-client";

export const Input: FC = () => {

    const [text, setText] = useState("");
    const [tagList, setTagList]  = useRecoilState(tagListState)
    let client : ArticleClient|null = null
    //@ts-ignore
    client = window.client;

    const searchTagList = async (tagName: string) => client?.extractTagList(tagName)
            .then(e => setTagList(_ => e))
            .catch(e => console.log(e));

    return (
        <div id={"input"}>
            <input type={"text"}
                   value={text}
                   onChange={(text) =>setText(_=> text.target.value)}/>
            <button onClick={() => searchTagList(text)}>検索</button>
        </div>
    );
}
