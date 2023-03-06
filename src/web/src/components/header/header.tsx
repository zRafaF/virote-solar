// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { FC, Key, useState, useEffect } from "react";
import styleModule from "./header.module.css";

import { FaLaptopCode } from "react-icons/fa";
import { MdMap, MdSettings, MdInfo, MdMenu } from "react-icons/md";
import CustomButton from "../customButton/customButton";
import ButtonGroup from "../buttonGroup/buttonGroup";
import ConnectionComponent from "./connectionComponent/connectionComponent";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const [currentActive, setCurrentActive] = useState<Key>("Mapa");
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const getMobileMenuClassName = (): string => {
        if (menuIsOpen) return styleModule.mobile_menu_open;
        return styleModule.mobile_menu;
    };

    const toggleButton = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const orientationChanged = () => {
        setMenuIsOpen(false);
    };

    useEffect(() => {
        window
            .matchMedia("(orientation: portrait)")
            .addEventListener("change", (e) => {
                const portrait = e.matches;

                if (portrait) {
                    orientationChanged();
                } else {
                    orientationChanged();
                }
            });
    }, []);

    return (
        <div className={styleModule.header_div} data-testid="header">
            <CustomButton
                className={styleModule.menu_button}
                buttonKey={"menu"}
                toolTip={"Menu"}
                preIcon={<MdMenu />}
                iconSize={"var(--font_l)"}
                color={"var(--font_color_inverted)"}
                clickCallBack={toggleButton}
            />
            <div className={styleModule.logo_name}>VIROTE</div>
            <div className={getMobileMenuClassName()}>
                <ButtonGroup
                    className={styleModule.button_group_mobile}
                    currentActive={currentActive}
                    setCurrentActive={setCurrentActive}
                    vertical={true}
                >
                    <CustomButton
                        toolTip="Mapa"
                        key={"Mapa"}
                        buttonKey={"Mapa"}
                        postIcon={<MdMap />}
                        color={"white"}
                        iconSize="var(--font_s)"
                        className=""
                    >
                        Mapa
                    </CustomButton>
                    <CustomButton
                        toolTip="Inspecionar"
                        key={"Inspec."}
                        buttonKey={"Inspec."}
                        postIcon={<FaLaptopCode />}
                        color={"white"}
                        iconSize="var(--font_s)"
                        className=""
                    >
                        Inspec.
                    </CustomButton>
                    <CustomButton
                        toolTip="Configurações"
                        key={"Config."}
                        buttonKey={"Config."}
                        postIcon={<MdSettings />}
                        color={"white"}
                        iconSize="var(--font_s)"
                        className=""
                    >
                        Config.
                    </CustomButton>
                    <CustomButton
                        toolTip="Sobre"
                        key={"Sobre"}
                        buttonKey={"Sobre"}
                        postIcon={<MdInfo />}
                        color={"white"}
                        iconSize="var(--font_s)"
                        className=""
                    >
                        Sobre
                    </CustomButton>
                </ButtonGroup>
            </div>
            <ButtonGroup
                className={styleModule.button_group}
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
                vertical={false}
            >
                <CustomButton
                    toolTip="Mapa"
                    key={"Mapa"}
                    buttonKey={"Mapa"}
                    postIcon={<MdMap />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Mapa
                </CustomButton>
                <CustomButton
                    toolTip="Inspecionar"
                    key={"Inspec."}
                    buttonKey={"Inspec."}
                    postIcon={<FaLaptopCode />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Inspec.
                </CustomButton>
                <CustomButton
                    toolTip="Configurações"
                    key={"Config."}
                    buttonKey={"Config."}
                    postIcon={<MdSettings />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Config.
                </CustomButton>
                <CustomButton
                    toolTip="Sobre"
                    key={"Sobre"}
                    buttonKey={"Sobre"}
                    postIcon={<MdInfo />}
                    color={"white"}
                    iconSize="var(--font_s)"
                    className=""
                >
                    Sobre
                </CustomButton>
            </ButtonGroup>
            <ConnectionComponent className={styleModule.connection_dropdown} />
        </div>
    );
};

export default Header;
