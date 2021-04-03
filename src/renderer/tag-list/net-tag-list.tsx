import {FC, useState} from "react";
import {useRecoilState} from "recoil";
import {addTag, fetchTag, netTagListAtomState} from "../store";
import {Tag} from "../tag/tag";
import {Input} from "../input";
import {TagModel} from "../../main/tag/tag-model";
import './tag-list.scss';
import {useSetDb} from "../custom/customs";

export const NetTagList: FC = () => {
    const [tags, setTags] = useRecoilState(netTagListAtomState);
    const [tagName, setTagName] = useState("");
    const setDb = useSetDb(addTag);


    return(
        <>
            <Input
                onClick={() => {
                    fetchTag(tagName).then(tags => {
                        const te: TagModel[]= tags.map(t => {return {id: t.id, updateAt: undefined}});
                        console.log(te);
                        setTags(_ => te)
                    });
                }}
                btnText={"確認"}
                onChange={(text) => {setTagName(text)}} />

            <div className={"tag-list"}>
                {tags.map(t => <Tag key={t.id}
                                    id={t.id}
                                    updateAt={undefined}
                                    diaDescription={`「${t.id}」を登録しますか？`}
                                    onOkClick={()=> setDb(t.id)}
                                    onOkText={"登録"}/>)}
            </div>
        </>
    );
};
