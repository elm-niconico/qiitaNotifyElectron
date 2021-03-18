import {FC} from "react";
import {TagJsonModel} from "../../main/client/article-client";





export const Tag: FC<TagJsonModel> = (props)=>(
    <div className={"tag"}>
        {props.id}
    </div>
);
