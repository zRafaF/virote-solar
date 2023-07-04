// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react";
import { Box } from "@mui/material";

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = () => {
    return (
        <React.Fragment>
            <Box sx={{ backgroundColor: "@f2f2f2", height: "stretch" }}>
                SIDE BAR
            </Box>
        </React.Fragment>
    );
};

export default SideMenu;
