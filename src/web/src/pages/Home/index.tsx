// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FunctionComponent } from "react";
import styleModule from "./index.module.css";
import MapComponent from "./mapComponent/mapComponent";
import SideMenu from "./sideMenu/sideMenu";
import { Box } from "@mui/material";

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
            }}
        >
            <div className={styleModule.content}>
                <MapComponent></MapComponent>
            </div>
            <div className={styleModule.side_menu}>
                <SideMenu />
            </div>
        </Box>
    );
};

export default Home;
