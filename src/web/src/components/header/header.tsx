// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC } from "react";
import styleModule from "./header.module.css";

import { FaLaptopCode } from "react-icons/fa";
import { MdMap, MdSettings, MdInfo } from "react-icons/md";
import CustomButton from "../customButton/customButton";
import ButtonGroup from "../buttonGroup/buttonGroup";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styleModule.header_div}>
            <div className={styleModule.logo_name}>VIROTE</div>
            <ButtonGroup className={styleModule.button_group}>
                <CustomButton
                    key={"Mapa"}
                    postIcon={<MdMap />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Mapa
                </CustomButton>
                <CustomButton
                    key={"Inspec."}
                    postIcon={<FaLaptopCode />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Inspec.
                </CustomButton>
                <CustomButton
                    key={"Config."}
                    postIcon={<MdSettings />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Config.
                </CustomButton>
                <CustomButton
                    key={"Inspecionar"}
                    postIcon={<MdInfo />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Sobre
                </CustomButton>
            </ButtonGroup>
        </div>
    );
};

export default Header;
