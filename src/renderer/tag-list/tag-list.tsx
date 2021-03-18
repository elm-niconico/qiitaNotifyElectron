import {FC} from "react";
import {Tag} from "../tag/tag";
import {useRecoilState} from "recoil";
import {registeredTagListState, SelectedTagList, selectTagListState, tagListState} from "../root";
import {TagJsonModel} from "../../main/client/article-client";


export const TagList: FC<{tags:TagJsonModel[]}> = (tagListProps) => {



    return (
    <div id={"tag-list"}>
        {tagListProps.tags.map(t => <Tag key={t.id}
                            followers_count={t.followers_count}
                            id={t.id}
                            items_count={t.items_count}
                            icon_url={t.icon_url} />)}
    </div>

    );
};



