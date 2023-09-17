// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, ReactNode } from "react";
import SideBarWave from "./sideBarWave/sideBarWave";
import { Box } from "@mui/material";

interface SideMenuProps {
    drawerWidth: number;
    children?: ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ drawerWidth, children }) => {
    return (
        <Box
            sx={{
                width: drawerWidth,
            }}
            display={"flex"}
            flexGrow={2}
        >
            {children}
            <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    left: drawerWidth,
                    transformOrigin: "left",
                    zIndex: 1,
                }}
            >
                <SideBarWave />
            </Box>
        </Box>
    );
};

export default SideMenu;
