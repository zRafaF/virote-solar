// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
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
import { Link } from "react-router-dom";
import ConnectionMenu from "./connectionMenu/connectionMenu";

const drawerWidth = 240;
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

interface HeaderMuiProps {}

const HeaderMui: FunctionComponent<HeaderMuiProps> = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const theme = useTheme();
    const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItem button component={Link} to={"/"}>
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mapa" />
                    </ListItem>
                </ListItem>

                <ListItem disablePadding>
                    <ListItem button component={Link} to={"status"}>
                        <ListItemIcon>
                            <AnalyticsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Status" />
                    </ListItem>
                </ListItem>
                <ListItem disablePadding>
                    <ListItem button component={Link} to={"config"}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Config." />
                    </ListItem>
                </ListItem>
                <ListItem disablePadding>
                    <ListItem button component={Link} to={"sobre"}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sobre" />
                    </ListItem>
                </ListItem>
            </List>

            <Divider />
        </div>
    );

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" sx={{ zIndex: 9999 }}>
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
                                onClick={handleDrawerToggle}
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
                                value={value}
                                onChange={handleChange}
                                aria-label="nav tabs example"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tooltip title="Página de criação de missão">
                                    <Tab
                                        component={Link}
                                        to={"/"}
                                        label={lessThanMd ? "" : "Mapa"}
                                        icon={<MapIcon />}
                                        iconPosition="start"
                                    />
                                </Tooltip>

                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />

                                <Tooltip title="Página de status">
                                    <Tab
                                        component={Link}
                                        to={"status"}
                                        label={lessThanMd ? "" : "Status"}
                                        icon={<AnalyticsIcon />}
                                        iconPosition="start"
                                    />
                                </Tooltip>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Tooltip title="Página de configurações">
                                    <Tab
                                        component={Link}
                                        to={"config"}
                                        label={lessThanMd ? "" : "Config."}
                                        icon={<SettingsIcon />}
                                        iconPosition="start"
                                    />
                                </Tooltip>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Tooltip title="Página de informações sobre a aplicação">
                                    <Tab
                                        component={Link}
                                        to={"sobre"}
                                        label={lessThanMd ? "" : "Sobre"}
                                        icon={<InfoIcon />}
                                        iconPosition="start"
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
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
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
                    {drawer}
                </Drawer>
            </Box>
        </ThemeProvider>
    );
};

export default HeaderMui;
