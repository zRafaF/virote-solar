import React from "react";

import "./App.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./components/mainPage/mainPage";
import Header from "./components/header/header";
import MapComponent from "./components/mainPage/mapComponent/mapComponent";

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
    return (
        <React.Fragment>
            <div className="App">
                <Header data-testid="AppHeader"></Header>
                <MainPage data-testid="AppMainPage"></MainPage>
            </div>
            <ToastContainer className="toast_notify" transition={Zoom} />
        </React.Fragment>
    );
}

export default App;
