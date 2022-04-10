import style from "./draw.module.scss";

export default function Turntable() {
    return (
        <div className={style.turntable}>
            <div className={style.turntable_content}>
                <div className={style.table}></div>
                <div className={style.table}></div>
                <div className={style.table}></div>
                <div className={style.table}></div>
            </div>
            <div className={style.turntable_content_center} onClick={() => {}}>
                点击
            </div>
        </div>
    );
}
