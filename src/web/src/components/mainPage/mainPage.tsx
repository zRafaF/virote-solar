// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { FC } from "react";
import styleModule from "./mainPage.module.css";

import SideMenu from "../sideMenu/sideMenu";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
    return (
        <div className={styleModule.main_page_div} data-testid="main page">
            <div className={styleModule.side_menu}>
                <SideMenu />
            </div>
            <div className={styleModule.content}>Main Page</div>
        </div>
    );
};

export default MainPage;
