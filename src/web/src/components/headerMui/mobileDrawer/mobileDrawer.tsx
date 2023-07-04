// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Box, Divider, Drawer, Tab, Tabs, Tooltip } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

interface MobileDrawerProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

    currentPageValue: number;
    handlePageChange: (event: React.SyntheticEvent, newValue: number) => void;

    drawerWidth?: number;
}

const MobileDrawer: FunctionComponent<MobileDrawerProps> = ({
    open,
    setOpen,
    currentPageValue,
    handlePageChange,
    drawerWidth = 240,
}) => {
    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
            }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant="temporary"
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        height: "100%",
                    },
                }}
            >
                <Tabs
                    orientation="vertical"
                    value={currentPageValue}
                    onChange={handlePageChange}
                    aria-label="nav tabs example"
                    indicatorColor="secondary"
                    textColor="secondary"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <Tooltip
                        title="Página de criação de missão"
                        placement="right"
                        arrow
                    >
                        <Tab
                            component={Link}
                            to={"/"}
                            label={"Mapa"}
                            icon={<MapIcon />}
                            iconPosition="start"
                        />
                    </Tooltip>

                    <Divider variant="middle" flexItem />

                    <Tooltip title="Página de status" placement="right" arrow>
                        <Tab
                            component={Link}
                            to={"status"}
                            label={"Status"}
                            icon={<AnalyticsIcon />}
                            iconPosition="start"
                        />
                    </Tooltip>
                    <Divider variant="middle" flexItem />
                    <Tooltip
                        title="Página de configurações"
                        placement="right"
                        arrow
                    >
                        <Tab
                            component={Link}
                            to={"config"}
                            label={"Config."}
                            icon={<SettingsIcon />}
                            iconPosition="start"
                        />
                    </Tooltip>
                    <Divider variant="middle" flexItem />
                    <Tooltip
                        title="Página de informações sobre a aplicação"
                        placement="right"
                        arrow
                    >
                        <Tab
                            component={Link}
                            to={"sobre"}
                            label={"Sobre"}
                            icon={<InfoIcon />}
                            iconPosition="start"
                        />
                    </Tooltip>
                </Tabs>
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;
