import {FC} from "react";
import ReactDOM from "react-dom";
import './index.scss';
import {TagList} from "../tag/tag-list";
import {Input} from "../input";
import {atom, RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {TagJsonModel} from "../../main/client/article-client";
import {SideBar} from "../side-bar";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;


export enum Select{
    //ローカルに保存されているタグ
    StoredLocally,
    //ネットからApi経由で取得する状態
    NetWork
}

export const tagListState = atom<TagJsonModel[]>({
    key : "tag-list",
    default : []
});

//登録済みのタグリスト TODO
export const registeredTagListState = atom<TagJsonModel[]>({
    key: "register-tag-list",
    default : []
});

export const selectState = atom<Select>({
    key: "selected-tag-list",
    default : Select.NetWork
});


const Root: FC = () => {
    const [selected] = useRecoilState(selectState);
    const [tagList, setTagList] = useRecoilState(stateChoice(selected));

    const componentChoice = (select: Select) => {
        switch (select){
            case Select.NetWork:
                return (
                    <>
                        <Input setTags={setTagList}/>
                        <TagList tags={tagList}/>
                    </>
                )
            case Select.StoredLocally:
                return <TagList tags={tagList}/>
        }
    }

    return(
    <>
        {componentChoice(selected)}
        <SideBar />
    </>
);
}



const stateChoice = (select: Select)=> {
    switch (select){
        case Select.NetWork:
            return tagListState;
        case Select.StoredLocally:
            return registeredTagListState;
    }
}


ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>
,document.getElementById('root'))
