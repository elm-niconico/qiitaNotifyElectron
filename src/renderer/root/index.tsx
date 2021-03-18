import {FC} from "react";
import ReactDOM from "react-dom";
import './index.scss';
import {TagList} from "../tag-list/tag-list";
import {Input} from "../input/input";
import {atom, RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import {TagJsonModel} from "../../main/client/article-client";
import {Tag} from "../tag/tag";
import {SideBar} from "../side-bar/side-bar";


export enum SelectedTagList{
    //ローカルに保存されているタグ
    Storedlocally,
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

export const selectTagListState = atom<SelectedTagList>({
    key: "selected-tag-list",
    default : SelectedTagList.NetWork
});


const Root: FC = () => {
    const [selected] = useRecoilState(selectTagListState);

    const tagList = useRecoilValue(stateChoice(selected));

    return(
    <RecoilRoot>
        <Input />
        <TagList tags={tagList}/>
        <SideBar />
    </RecoilRoot>
);
}

const stateChoice = (select: SelectedTagList)=> {
    switch (select){
        case SelectedTagList.NetWork:
            return tagListState;
        case SelectedTagList.Storedlocally:
            return registeredTagListState;
    }
}


ReactDOM.render(
    <RecoilRoot>
        <Root />
    </RecoilRoot>
,document.getElementById('root'))
