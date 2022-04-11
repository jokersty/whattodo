import { useState } from "react";
import style from "./home.module.scss";
import { Turntable } from "../../components";
import store from "../../store";

export default function Home() {
    console.log("传输触发了");
    store.dispatch({
        type: "getTodoList",
    });
    console.log(store.getState());

    const [title, setTitle] = useState<string>("待会吃什么");
    return (
        <div className={style.home}>
            <div className={style.title}>{title}</div>
            <Turntable />
        </div>
    );
}
