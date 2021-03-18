import {FC} from "react";
import {SelectButton} from "./select-button";
import {Select} from "./root";

const style = {
    gridRow: "2",
    gridColumn: "1",

}

export const SideBar: FC = () => {


    return (
        <div id={"side-bar"} style={style}>
            <SelectButton choice={Select.NetWork} btnText={"登録"} />
            <SelectButton choice={Select.StoredLocally} btnText={"一覧"} />
        </div>
    );
}
