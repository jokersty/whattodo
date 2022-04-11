import "./App.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../home";
import Custom from "../custom/custom";
import { useState } from "react";
import TabBar from "../../components/tabBar";

function App() {
    let [tabList, setTabList] = useState([
        { name: "立刻决定", id: "0", checked: true, page: "home" },
        { name: "自定义", id: "1", checked: false, page: "custom" },
    ]);
    const changeTab = (id: string) => {
        const checkClick = tabList.filter((item) => item.id === id);
        if (checkClick[0].checked) {
            return;
        }
        let newTabList = tabList.map((list) => {
            let newList = { ...list };
            if (newList.id === id && !newList.checked) {
                newList.checked = true;
            } else {
                newList.checked = false;
            }
            return newList;
        });
        setTabList(newTabList);
    };
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/custom" element={<Custom />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            <TabBar
                tabList={tabList}
                changeTab={(id: string) => {
                    changeTab(id);
                }}
            ></TabBar>
        </HashRouter>
    );
}

export default App;
