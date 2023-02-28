// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FC } from "react";
import styleModule from "./sideMenu.module.css";

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
    return (
        <div className={styleModule.side_menu_div} data-testid="SideMenu">
            <div
                className={styleModule.file_save_load}
                data-testid="file saver and loader"
            >
                LOAD
            </div>
        </div>
    );
};

export default SideMenu;
