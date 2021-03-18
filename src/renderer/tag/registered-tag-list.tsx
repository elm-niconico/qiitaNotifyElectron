import {FC} from "react";
import {useRecoilValue} from "recoil";
import {registeredTagListState} from "../root";
import {Tag} from "./tag";

const RegisteredTagList: FC = () => {
    const registeredTagList = useRecoilValue(registeredTagListState);

    return (
        <div>
            {registeredTagList.map(t =>
                <Tag
                    followers_count={t.followers_count}
                    id={t.id}
                    items_count={t.items_count} />) }
        </div>
    );


}
