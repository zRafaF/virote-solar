// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import SideBarWave from "./sideBarWave/sideBarWave";
import { Box } from "@mui/material";

const drawerWidth = 240;

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
    return (
        <Box
            sx={{
                backgroundColor: "@f2f2f2",
                height: "stretch",
                width: drawerWidth,
            }}
        >
            SIDE BAR
            <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    left: drawerWidth,
                    transformOrigin: "left",
                    zIndex: 31,
                }}
            >
                <SideBarWave />
            </Box>
        </Box>
    );
};

export default SideMenu;
