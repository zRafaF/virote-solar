// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import styleModule from "./connectionDropdown.module.css";

import CustomButton from "../../../customButton/customButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { eel } from "../../../../App";
import { toast } from "react-toastify";
import { TbPlugX } from "react-icons/tb";

const comOptions = [" ", "COM 0", "COM 1", "COM 2"];
const baudOptions = [
    " ",
    "4800",
    "9600",
    "14400",
    "19200",
    "38400",
    "57600",
    "115200",
    "128000",
];

interface ConnectionDropdownProps {}

// Defines the return type from the JSON received from eel
type PortType = {
    port: string;
    desc: string;
};

async function getAvailablePorts(): Promise<PortType[]> {
    try {
        return await eel.get_available_ports_list()();
    } catch (error) {
        toast.error("Não foi possível receber a lista de portas");
        return [];
    }
}

const ConnectionDropdown: FC<ConnectionDropdownProps> = () => {
    const openPort = async () => {
        // The following line selects a serial port from the browser API
        //const port = await navigator.serial.requestPort();
        //console.log(port);
        getAvailablePorts().then((response) => {
            console.log(response);
        });
    };

    return (
        <div className={styleModule.connection_dropdown_div}>
            Porta&nbsp;
            <Dropdown
                options={comOptions}
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
                options={baudOptions}
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
