// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent } from "react";
import SideMenu from "./sideMenu/sideMenu";
import { Box } from "@mui/material";
import MenuContent from "./menuContent/menuContent";
import BottomMenu from "./bottomMenu/bottomMenu";
import MapComponent from "components/mapComponent/mapComponent";

const drawerWidth = 400;

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row-reverse",
                height: "stretch",
                width: "stretch",
                backgroundColor: "#f2f2f2",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    overflow: "hidden",
                    width: "stretch",
                }}
            >
                <MapComponent />
            </Box>
            <Box
                sx={{
                    width: drawerWidth,
                    display: { xs: "none", sm: "none", md: "block" },
                }}
            >
                <SideMenu drawerWidth={drawerWidth}>
                    <MenuContent />
                </SideMenu>
            </Box>
            <Box
                sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                }}
            >
                <BottomMenu>
                    <MenuContent />
                </BottomMenu>
            </Box>
        </Box>
    );
};

export default Home;
