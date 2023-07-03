// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import SideBarWave from "./sideBarWave/sideBarWave";
import styleModule from "./sideMenu.module.css";

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
    return (
        <React.Fragment>
            <div className={styleModule.side_menu_div} data-testid="SideMenu">
                <div className={styleModule.mobile_pull_tab_div}>
                    <div className={styleModule.mobile_pull_tab}></div>
                </div>
                <div
                    className={styleModule.file_save_load}
                    data-testid="file saver and loader"
                >
                    LOAD
                </div>
            </div>
            <div className={styleModule.side_bar_wave_div}>
                <SideBarWave />
            </div>
        </React.Fragment>
    );
};

export default SideMenu;
