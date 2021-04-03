import {useRecoilState} from "recoil";
import {addTag, dbTagListAtomState, selectDbTag} from "../store";

export const useSetDb =  (callback: (tagId: string) => Promise<void>) => {
    const [_, setDb] = useRecoilState(dbTagListAtomState);
    return (tagId: string) => {
        (async ()=>{
            await callback(tagId);
            const tags = await selectDbTag();
            tags.forEach(t => console.log(t))
            setDb(tags);
        })();
    };
}
