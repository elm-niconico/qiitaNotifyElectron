import {FC} from "react";
import {Select, selectState} from "./root";
import {useRecoilState} from "recoil";

export const SelectButton: FC<{
    choice: Select,
    btnText: string }> = (props) => {

    const [_, setSelect] = useRecoilState(selectState)
    return (
        <button className={""}
                onClick={() => setSelect(_ => props.choice)}>
            {props.btnText}
        </button>
    );
}
