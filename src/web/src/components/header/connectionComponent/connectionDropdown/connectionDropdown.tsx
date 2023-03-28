// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, useContext, useEffect } from "react";
import styleModule from "./connectionDropdown.module.css";

import CustomButton from "../../../customButton/customButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { eel } from "../../../../App";
import { toast } from "react-toastify";
import { TbPlugX } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
import GlobalAccessContext from "../../../../contexts/globalAccessContext";

const baudRates = [
    "1200",
    "1800",
    "2400",
    "4800",
    "9600",
    "19200",
    "38400",
    "57600",
    "115200",
    "230400",
    "460800",
    "500000",
    "576000",
    "921600",
    "1000000",
    "1152000",
    "1500000",
];

interface ConnectionDropdownProps {}

async function getAvailablePorts(): Promise<PortType[]> {
    try {
        return await eel.get_available_ports_list()();
    } catch (error) {
        toast.error("Não foi possível receber a lista de portas");
        return [];
    }
}

const ConnectionDropdown: FC<ConnectionDropdownProps> = () => {
    const [globalAccess, setGlobalAccess] = useContext(GlobalAccessContext);
    const openPort = async () => {
        // The following line selects a serial port from the browser API
        //const port = await navigator.serial.requestPort();
        //console.log(port);

        alert("nada ainda");
    };

    const refreshPortsList = async () => {
        toast.promise(
            getAvailablePorts().then((response) => {
                let globalCopy: globalAccessInterface = { ...globalAccess };
                globalCopy.ports = response;
                setGlobalAccess(globalCopy);
            }),
            {
                pending: "Atualizando lista de portas",
                success: "Lista de portas atualizada 👌",
                error: "Não foi possível atualizar a lista de portas 🤯",
            },
            { autoClose: 5000, draggable: true, closeOnClick: true }
        );
    };

    useEffect(() => {
        refreshPortsList();
    }, []);

    const getComOptions = (): string[] => {
        let resultArray: string[] = [];

        globalAccess.ports.forEach((element: PortType) => {
            resultArray.push(element.port + " | " + element.desc);
            console.log(element);
        });

        return resultArray;
    };

    return (
        <div className={styleModule.connection_dropdown_div}>
            <CustomButton
                key={"Refresh"}
                buttonKey={"Refresh"}
                postIcon={<MdRefresh />}
                color={"var(--detail_color)"}
                iconSize="var(--font_m)"
                toolTip="Atualizar lista de dispositivos"
                className={styleModule.refresh_button}
                clickCallBack={refreshPortsList}
            >
                Atualizar
            </CustomButton>
            Porta&nbsp;
            <Dropdown
                options={getComOptions()}
                placeholderClassName={
                    styleModule.connection_dropdown_place_holder
                }
                className={styleModule.connection_dropdown}
                controlClassName={styleModule.connection_dropdown_control}
                menuClassName={styleModule.connection_dropdown_menu}
                placeholder=" "
            />
            &nbsp;Baud&nbsp;
            <Dropdown
                options={baudRates}
                placeholderClassName={
                    styleModule.connection_dropdown_place_holder
                }
                className={styleModule.connection_dropdown}
                controlClassName={styleModule.connection_dropdown_control}
                menuClassName={styleModule.connection_dropdown_menu}
                placeholder=" "
            />
            <CustomButton
                key={"Disconnect"}
                buttonKey={"Disconnect"}
                postIcon={<TbPlugX />}
                color={"#EE3C3C"}
                iconSize="var(--font_m)"
                toolTip="[Iniciar / Encerrar] conexão"
                className={styleModule.disconnect_button}
                clickCallBack={openPort}
            >
                ENCERRAR
            </CustomButton>
        </div>
    );
};

export default ConnectionDropdown;
