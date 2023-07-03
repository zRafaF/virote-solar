import React, { useState } from "react";

import "./App.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Routes, Route, HashRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import GlobalAccessContext, {
    globalAccessDefault,
} from "./contexts/globalAccessContext";
import Home from "./pages/Home";
import HeaderMui from "./components/headerMui/headerMui";

export const eel = window.eel;
try {
    eel.set_host("ws://localhost:8080");
    toast.success("Conexão estabelecida");
} catch {
    toast.error("Não foi possível conectar com o backend");
}

async function callEelFunc() {
    try {
        eel.my_func();
    } catch (error) {}
}

callEelFunc();

function App() {
    const [globalAccess, setGlobalAccess] = useState(globalAccessDefault);

    return (
        <GlobalAccessContext.Provider value={[globalAccess, setGlobalAccess]}>
            <div className="App">
                <HashRouter>
                    <HeaderMui></HeaderMui>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </HashRouter>
            </div>
            <ToastContainer className="toast_notify" transition={Zoom} />
        </GlobalAccessContext.Provider>
    );
}

export default App;
