// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    AppBar,
    Box,
    Container,
    Divider,
    IconButton,
    Tab,
    Tabs,
    ThemeProvider,
    Toolbar,
    Tooltip,
    Typography,
    createTheme,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreIcon from "@mui/icons-material/Explore";
import React from "react";

import MapIcon from "@mui/icons-material/Map";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useLocation } from "react-router-dom";
import ConnectionMenu from "./connectionMenu/connectionMenu";
import MobileDrawer from "./mobileDrawer/mobileDrawer";

const tabHeight = 48;

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        secondary: {
            main: "#ffffff",
        },
    },
});

function getPageIndexFromPathname(pathname: string): number {
    switch (pathname) {
        case "/":
            return 0;
        case "/status":
            return 2;
        case "/config":
            return 4;
        case "/sobre":
            return 6;

        default:
            return 0;
    }
}

interface HeaderMuiProps {}

const HeaderMui: FunctionComponent<HeaderMuiProps> = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const theme = useTheme();
    const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));

    const [currentPageValue, setCurrentPageValue] = useState(
        getPageIndexFromPathname(location.pathname)
    );

    const handlePageChange = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setCurrentPageValue(newValue);
        console.log(newValue);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ExploreIcon
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                mr: 1,
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to={"/"}
                            sx={{
                                mr: 2,
                                display: { xs: "none", sm: "flex" },
                                fontFamily: "righteous",
                                fontWeight: 500,
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            VIROTE
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", sm: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => {
                                    setMobileOpen(true);
                                }}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <ExploreIcon
                            sx={{
                                display: { xs: "flex", sm: "none" },
                                mr: 1,
                            }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to={"/"}
                            sx={{
                                mr: 2,
                                display: { xs: "flex", sm: "none" },
                                flexGrow: 1,
                                fontFamily: "righteous",
                                fontWeight: 500,
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            VIROTE
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "flex" },
                                color: "white",
                                ml: { sm: 0, lg: 6 },
                                justifyContent: {
                                    sm: "center",
                                    lg: "left",
                                },
                            }}
                        >
                            <Tabs
                                value={currentPageValue}
                                onChange={handlePageChange}
                                aria-label="nav tabs example"
                                indicatorColor="secondary"
                                textColor="secondary"
                                sx={{
                                    minHeight: tabHeight,
                                    height: tabHeight,
                                }}
                            >
                                <Tooltip
                                    title="Página de criação de missão"
                                    arrow
                                >
                                    <Tab
                                        component={Link}
                                        to={"/"}
                                        label={lessThanMd ? "" : "Mapa"}
                                        icon={<MapIcon />}
                                        iconPosition="start"
                                        sx={{
                                            minWidth: 70,
                                            minHeight: tabHeight,
                                            height: tabHeight,
                                        }}
                                    />
                                </Tooltip>

                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />

                                <Tooltip title="Página de status" arrow>
                                    <Tab
                                        component={Link}
                                        to={"status"}
                                        label={lessThanMd ? "" : "Status"}
                                        icon={<AnalyticsIcon />}
                                        iconPosition="start"
                                        sx={{
                                            minWidth: 70,
                                            minHeight: tabHeight,
                                            height: tabHeight,
                                        }}
                                    />
                                </Tooltip>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Tooltip title="Página de configurações" arrow>
                                    <Tab
                                        component={Link}
                                        to={"config"}
                                        label={lessThanMd ? "" : "Config."}
                                        icon={<SettingsIcon />}
                                        iconPosition="start"
                                        sx={{
                                            minWidth: 70,
                                            minHeight: tabHeight,
                                            height: tabHeight,
                                        }}
                                    />
                                </Tooltip>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Tooltip
                                    title="Página de informações sobre a aplicação"
                                    arrow
                                >
                                    <Tab
                                        component={Link}
                                        to={"sobre"}
                                        label={lessThanMd ? "" : "Sobre"}
                                        icon={<InfoIcon />}
                                        iconPosition="start"
                                        sx={{
                                            minWidth: 70,
                                            minHeight: tabHeight,
                                            height: tabHeight,
                                        }}
                                    />
                                </Tooltip>
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <ConnectionMenu />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <MobileDrawer
                open={mobileOpen}
                setOpen={setMobileOpen}
                currentPageValue={currentPageValue}
                handlePageChange={handlePageChange}
            />
        </ThemeProvider>
    );
};

export default HeaderMui;
