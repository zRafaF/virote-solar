// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, useState } from "react";
import styleModule from "./connectionComponent.module.css";

import CustomButton from "../../customButton/customButton";
import ConnectionDropdown from "./connectionDropdown/connectionDropdown";
import { TbPlugConnected } from "react-icons/tb";

interface ConnectionComponentProps {
    className?: string;
}

const ConnectionComponent: FC<ConnectionComponentProps> = ({ className }) => {
    const [dropdownIsActive, setDropdownIsActive] = useState(false);
    const getDropdownContainerClassName = (): string => {
        if (dropdownIsActive) return styleModule.dropdown_active;
        return styleModule.dropdown_inactive;
    };
    const toggleDropdown = () => {
        setDropdownIsActive(!dropdownIsActive);
    };
    return (
        <div className={className}>
            <CustomButton
                key={"Conexão"}
                buttonKey={"Conexão"}
                postIcon={<TbPlugConnected />}
                color={"var(--faded_font_color)"}
                iconSize="var(--font_m)"
                toolTip="[Abrir / Fechar] menu de conexão"
                className={styleModule.connection_menu_button}
                clickCallBack={toggleDropdown}
            >
                Conexão
            </CustomButton>
            <div className={getDropdownContainerClassName()}>
                <ConnectionDropdown />
            </div>
        </div>
    );
};

export default ConnectionComponent;
