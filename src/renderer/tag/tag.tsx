import {FC, useState} from "react";
import {TagModel} from "../../main/tag/tag-model";
import './tag.scss';
import {useSetDb} from "../custom/customs";
import Modal from 'react-modal';
import {ModalDialog} from "../modal/modal-dialog";

export interface Props{
    diaDescription: string;
    onOkClick: () => void;
    onOkText : string;
}

export const Tag: FC<TagModel & Props> = (p)=> {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <ModalDialog
                description={p.diaDescription}
                isOpen={isOpen}
                onOkClick={()=>{
                    p.onOkClick();
                    setOpen(false);
                }}
                onCancelClick={() => {setOpen(false)}}
                okText={p.onOkText}/>

            <div className={"tag"} onClick={() => {setOpen(true)}}>
                {p.id}
            </div>
        </>

    );
}
