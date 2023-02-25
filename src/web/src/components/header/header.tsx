// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC } from "react";
import styleModule from "./header.module.css";

import { FaFileCode } from "react-icons/fa";
import { MdMap, MdSettings, MdInfo } from "react-icons/md";
import CustomButton from "../customButton/customButton";
import ButtonGroup from "../buttonGroup/buttonGroup";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styleModule.header_div}>
            <div className={styleModule.logo_name}>VIROTE</div>
            <ButtonGroup>
                <CustomButton
                    key={"Mapa"}
                    preIcon={<MdMap />}
                    color={"black"}
                    iconSize="var(--font_m)"
                    className=""
                >
                    Mapa
                </CustomButton>
                <CustomButton
                    key={"Inspecionar"}
                    preIcon={<FaFileCode />}
                    color={"black"}
                    iconSize="var(--font_m)"
                    className=""
                >
                    Inspecionar
                </CustomButton>
                <CustomButton
                    key={"Configuração"}
                    preIcon={<MdSettings />}
                    color={"black"}
                    iconSize="var(--font_m)"
                    className=""
                >
                    Configuração
                </CustomButton>
                <CustomButton
                    key={"Inspecionar"}
                    preIcon={<MdInfo />}
                    color={"black"}
                    iconSize="var(--font_m)"
                    className=""
                >
                    Inspecionar
                </CustomButton>
            </ButtonGroup>
        </div>
    );
};

export default Header;
