import style from "./index.module.scss";

export default function TabBar(props: any) {
    const tabList = props.tabList;
    return (
        <div className={style.tab}>
            {tabList.map((item: any) => {
                return (
                    <div
                        className={`${style.tab_name} ${
                            item.checked && style.active
                        }`}
                        key={item.id}
                        onClick={() => {
                            props.changeTab(item.id);
                        }}
                    >
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
}
