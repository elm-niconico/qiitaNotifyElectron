import {FC, useEffect} from "react";
import {Tag} from "../tag/tag";
import {TagModel} from "../../main/tag/tag-model";
import {useRecoilState} from "recoil";
import {dbTagListAtomState, deleteTag, selectDbTag} from "../store";
import {useSetDb} from "../custom/customs";

export const DbTagList: FC = () => {
    const [list, setList] = useRecoilState<TagModel[]>(dbTagListAtomState);
    const deleteDb = useSetDb(deleteTag);

    useEffect(()=>{
        (async ()=>{
            const tagList = await selectDbTag();
            setList(_ => tagList);
        })();
    },[]);

    return (
        <div className={"tag-list"}>
            {list.map(tag => <Tag key={tag.id}
                                  id={tag.id}
                                  updateAt={tag.updateAt}
                                  onOkText={"削除"}
                                  diaDescription={`「${tag.id}」を削除しますか?`}
                                  onOkClick={()=> deleteDb(tag.id)}/>)}
        </div>
    );
};
