import React, { useState } from "react";

import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import { Routes, Route, HashRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import GlobalAccessContext, {
    globalAccessDefault,
} from "./contexts/globalAccessContext";
import Home from "./pages/Home";
import HeaderMui from "./components/headerMui/headerMui";
import Status from "pages/Status";
import Config from "pages/Config";
import Sobre from "pages/Sobre";
import { ThemeProvider, createTheme } from "@mui/material";
import { callEelFunc } from "helper/api";

require("./helper/api");

callEelFunc();

const defaultTheme = createTheme({
    palette: {
        mode: "light",
    },
});

function App() {
    const [globalAccess, setGlobalAccess] = useState(globalAccessDefault);

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalAccessContext.Provider
                value={[globalAccess, setGlobalAccess]}
            >
                <div className="App">
                    <HashRouter>
                        <HeaderMui></HeaderMui>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="status" element={<Status />} />
                            <Route path="config" element={<Config />} />
                            <Route path="sobre" element={<Sobre />} />
                        </Routes>
                    </HashRouter>
                </div>
                <ToastContainer className="toast_notify" transition={Zoom} />
            </GlobalAccessContext.Provider>
        </ThemeProvider>
    );
}

export default App;
