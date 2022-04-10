import React, { useState, useEffect } from "react";
import style from "./draw.module.scss";

interface DoList {
    id: number;
    text: string;
    style?: any;
    textStyle?: any;
}

export default function Turntable() {
    let defaultdoList: DoList[] = [
        { id: 0, text: "黄焖鸡" },
        { id: 1, text: "螺蛳粉" },
        { id: 2, text: "拉面" },
        { id: 3, text: "汉堡" },
        { id: 4, text: "炒饭" },
        { id: 5, text: "再来一次" },
    ];
    let styles = [
        `#CE9FFC`,
        `#FDEB71`,
        `#ABDCFF`,
        `#FEB692`,
        `#90F7EC`,
        `#FFF6B7`,
        `#81FBB8`,
        `#F97794`,
    ];
    let drawStyles = [`wr0`, `wr1`, `wr2`, `wr3`, `wr4`, `wr5`, `wr6`, `wr7`];
    let newStyles = Object.assign([], styles);
    const newDoList = defaultdoList.map((list, index) => {
        let newlist: DoList;
        let backgroundColor =
            newStyles[Math.floor(Math.random() * newStyles.length)];
        newStyles.splice(newStyles.indexOf(backgroundColor), 1);
        let skewY: number = 90 - 360 / defaultdoList.length;
        newlist = {
            style: {
                transform: `rotate(${
                    (360 / defaultdoList.length) * index
                }deg) skewY(${skewY}deg)`,
                backgroundColor,
            },
            textStyle: {
                transform: `skewY(${-skewY}deg) rotate(${
                    (skewY - 90) / 2
                }deg) translate(0, 0.75rem)`,
            },
            ...list,
        };
        return newlist;
    });
    const [doList] = useState<DoList[]>(newDoList);
    let [deg, setDeg] = useState(360 / doList.length / 2);
    let [drawStyle, setDrawStyle] = useState("");
    const getDrawResult = () => {
        setDrawStyle(drawStyles[Math.floor(Math.random() * drawStyles.length)]);
    };
    return (
        <React.Fragment>
            <div className={style.turntable}>
                <div
                    className={`${style.turntable_content} ${
                        style[drawStyle] ?? ""
                    }`}
                    style={{ transform: `rotate(${deg}deg)` }}
                >
                    {doList.map((item: any) => {
                        return (
                            <div
                                className={style.table}
                                style={item.style}
                                key={item.id}
                            >
                                <div
                                    className={style.text}
                                    style={item.textStyle}
                                >
                                    {item.text}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    className={style.turntable_content_center}
                    onClick={() => {
                        getDrawResult();
                    }}
                >
                    点击
                </div>
            </div>
        </React.Fragment>
    );
}
