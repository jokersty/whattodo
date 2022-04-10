import "./App.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../home";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
