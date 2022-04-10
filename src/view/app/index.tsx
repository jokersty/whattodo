import "./App.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../home";
import React, { useState } from "react";
import TabBar from "../../components/tabBar";

function App() {
    let [tabList, setTabList] = useState([
        { name: "立刻决定", id: "0", checked: true, page: "home" },
        { name: "自定义", id: "1", checked: false, page: "custom" },
    ]);
    const [activePage, setActivePage] = useState("Movie");
    const changeTab = (id: string) => {
        const newTabList = tabList.map((list) => {
            let newList = { ...list };
            if (newList.id === id && !newList.checked) {
                newList.checked = true;
                setActivePage(newList.page);
            } else {
                newList.checked = false;
            }
            return newList;
        });
        setTabList(newTabList);
    };
    return (
        <React.Fragment>
            <HashRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </HashRouter>
            <TabBar
                tabList={tabList}
                changeTab={(id: string) => {
                    changeTab(id);
                }}
            ></TabBar>
        </React.Fragment>
    );
}

export default App;
