/* eslint-disable indent */
import { createStore } from "redux";

interface DoList {
    id: number;
    text: string;
    style?: any;
    textStyle?: any;
}

const reducer = (
    preState: DoList[] = [
        { id: 0, text: "黄焖鸡" },
        { id: 1, text: "螺蛳粉" },
        { id: 2, text: "拉面" },
        { id: 3, text: "汉堡" },
        { id: 4, text: "炒饭" },
        { id: 5, text: "吃大餐" },
        { id: 6, text: "煎饼" },
        { id: 7, text: "再来一次" },
    ],
    action: any
) => {
    console.log("redux触发了");
    let newState = [...preState];
    switch (action.type) {
        case "getTodoList":
            newState = [
                { id: 0, text: "黄焖鸡" },
                { id: 1, text: "螺蛳粉" },
                { id: 2, text: "拉面" },
                { id: 3, text: "汉堡" },
                { id: 4, text: "炒饭" },
                { id: 5, text: "吃大餐" },
                { id: 6, text: "煎饼" },
                { id: 7, text: "再来一次" },
            ];
            return newState;
        default:
            return preState;
    }
};

const store = createStore(reducer);

export default store;
