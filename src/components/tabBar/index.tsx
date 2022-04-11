import style from "./index.module.scss";
import { Link } from "react-router-dom";

export default function TabBar(props: any) {
    const tabList = props.tabList;
    return (
        <div className={style.tab}>
            {tabList.map((item: any) => {
                return (
                    <Link
                        className={`${style.tab_name} ${
                            item.checked && style.active
                        }`}
                        key={item.id}
                        onClick={() => {
                            props.changeTab(item.id);
                        }}
                        to={`/${item.page}`}
                    >
                        {item.name}
                        {item.checked}
                    </Link>
                );
            })}
        </div>
    );
}
