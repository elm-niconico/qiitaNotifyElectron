import {FC} from "react";
import {TagJsonModel} from "../../main/client/article-client";
import './tag.scss';



const style = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#faf7f7",
    width: 200,
    height: 80,
    justifyContent: "center",
    borderRadius: 2,
    textAlign: "center",
    boxShadow: "1px 2px 1px #9E9E9E",
    margin: "10px 10px 0px 40px",
};


export const Tag: FC<TagJsonModel> = (props)=>(
    //@ts-ignore
    <div className={"tag"} style={style} onClick={}>
        {props.id}
    </div>
);
