import React from "react";

import "./App.css";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./components/mainPage/mainPage";
import Header from "./components/header/header";

export const eel = window.eel;
try {
  eel.set_host("ws://localhost:8080");
  toast.success("Conexão estabelecida");
} catch {
  toast.error("Não foi possível conectar com o backend");
}

async function callEelFunc() {
  eel.my_func();
}

callEelFunc();

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header></Header>
        <MainPage></MainPage>
      </div>
      <ToastContainer className="toast_notify" transition={Zoom} />
    </React.Fragment>
  );
}

export default App;
