// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Paper,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreIcon from "@mui/icons-material/Explore";
import React from "react";

import Brightness6Icon from "@mui/icons-material/Brightness6";
import DownloadIcon from "@mui/icons-material/Download";

const pages = ["MAPA", "STATUS", "CONFIG.", "SOBRE"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const drawerWidth = 240;

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

            <Toolbar>
                <Typography variant="caption" display="block">
                    Room key:
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            const shareData: ShareData = {
                                title: "Uno Pow Zero",
                                text: "Let's play a ⁿᵒᵗ uno game?",
                                url: window.location.href,
                            };
                            navigator.share(shareData);
                        }}
                    >
                        <ListItemIcon>
                            <ExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Share Room" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => {
                            //setThemeSelectorContext(!themeSelectorContext);
                        }}
                    >
                        <ListItemIcon>
                            <Brightness6Icon />
                        </ListItemIcon>
                        <ListItemText primary="Toggle Theme" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />
        </div>
    );

    return (
        <React.Fragment>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ExploreIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
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
                        <AdbIcon
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton sx={{ p: 0 }}>asd</IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
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
