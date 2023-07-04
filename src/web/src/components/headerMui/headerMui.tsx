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
    Paper,
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
            <Toolbar
                component={Paper}
                elevation={4}
                sx={{
                    display: {
                        xs: "none",
                        sm: "flex",
                    },
                }}
            >
                <Typography variant="h6">Uno Pow Zero</Typography>
            </Toolbar>

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
        <React.Fragment>
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
                                variant="h6"
                                noWrap
                                component={Link}
                                to={"/"}
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "monospace",
                                    fontWeight: 700,
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
                                    fontFamily: "monospace",
                                    fontWeight: 700,
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
                                    ml: 6,
                                }}
                            >
                                <ButtonGroup
                                    variant="text"
                                    aria-label="button group"
                                    color="primary"
                                >
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<MapIcon />}
                                        component={Link}
                                        to={"/"}
                                    >
                                        Mapa
                                    </Button>
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<AnalyticsIcon />}
                                        component={Link}
                                        to={"status"}
                                    >
                                        Status
                                    </Button>
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<SettingsIcon />}
                                        component={Link}
                                        to={"config"}
                                    >
                                        Config.
                                    </Button>
                                    <Button
                                        sx={{ color: "white" }}
                                        startIcon={<InfoIcon />}
                                        component={Link}
                                        to={"sobre"}
                                    >
                                        Sobre
                                    </Button>
                                </ButtonGroup>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton sx={{ p: 0 }}>asd</IconButton>
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </React.Fragment>
    );
};

export default HeaderMui;
