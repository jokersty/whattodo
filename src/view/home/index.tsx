import { useState } from "react";
import style from "./home.module.scss";
import Turntable from "./draw/turntable";

export default function Home() {
    const [title, setTitle] = useState<string>("待会吃什么");
    return (
        <div className={style.home}>
            <div className={style.title}>{title}</div>
            <Turntable />
        </div>
    );
}
