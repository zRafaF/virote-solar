// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import styleModule from "./connectionComponent.module.css";

import CustomButton from "../../customButton/customButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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

interface ConnectionComponentProps {
    className?: string;
}

const ConnectionComponent: FC<ConnectionComponentProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className={styleModule.connection_component_div}>
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
                &nbsp;
                <div style={{ color: "#ED0707" }}>Desconec.</div>
                &nbsp;
                <CustomButton
                    key={"Disconnect"}
                    buttonKey={"Disconnect"}
                    postIcon={<TbPlugX />}
                    color={"#EE3C3C"}
                    iconSize="var(--font_m)"
                    className={styleModule.disconnect_button}
                >
                    Encerrar
                </CustomButton>
            </div>
        </div>
    );
};

export default ConnectionComponent;
