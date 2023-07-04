// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    AppBar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    Toolbar,
    Tooltip,
    Typography,
    createTheme,
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
                                display: { xs: "none", md: "flex" },
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
                                display: { xs: "none", md: "flex" },
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
                                display: { xs: "flex", md: "none" },
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
                                display: { xs: "flex", md: "none" },
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
                                display: { xs: "flex", md: "none" },
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
                                display: { xs: "none", md: "flex" },
                                color: "white",
                                ml: { md: 0, lg: 6 },
                                justifyContent: {
                                    md: "center",
                                    lg: "left",
                                },
                            }}
                        >
                            <ButtonGroup
                                variant="text"
                                aria-label="button group"
                                color="primary"
                            >
                                <Tooltip title="Página de criação de missão">
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<MapIcon />}
                                        component={Link}
                                        to={"/"}
                                    >
                                        Mapa
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Página de status">
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<AnalyticsIcon />}
                                        component={Link}
                                        to={"status"}
                                    >
                                        Status
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Página de configurações">
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<SettingsIcon />}
                                        component={Link}
                                        to={"config"}
                                    >
                                        Config.
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Página de informações sobre a aplicação">
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<InfoIcon />}
                                        component={Link}
                                        to={"sobre"}
                                    >
                                        Sobre
                                    </Button>
                                </Tooltip>
                            </ButtonGroup>
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
                        display: { sm: "block", md: "none" },
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
