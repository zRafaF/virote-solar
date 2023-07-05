// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { useState, FC } from "react";

import { TileLayer, useMap, Marker, useMapEvents } from "react-leaflet";
import {
    Divider,
    Fab,
    Stack,
    SxProps,
    Theme,
    Tooltip,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LayersIcon from "@mui/icons-material/Layers";
import HomeIcon from "@mui/icons-material/Home";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteIcon from "@mui/icons-material/Delete";
type mapType = "satellite" | "street";

interface InnerComponentsProps {}

const InnerComponents: FC<InnerComponentsProps> = () => {
    const map = useMap();

    /* eslint-disable */
    const mapEvents = useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, 16);
        },
    });
    /* eslint-enable */

    const theme = useTheme();
    const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));

    const [currentMapType, setCurrentMapType] = useState<mapType>("satellite");
    const getTileLayer = (): JSX.Element => {
        switch (currentMapType) {
            case "satellite": {
                return (
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        subdomains={["mt1", "mt2", "mt3"]}
                    />
                );
            }
            case "street": {
                return (
                    <TileLayer
                        className="road-overlay"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                );
            }
            default: {
                return (
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        subdomains={["mt1", "mt2", "mt3"]}
                    />
                );
            }
        }
    };

    const toggleMap = () => {
        if (currentMapType === "satellite") setCurrentMapType("street");
        else setCurrentMapType("satellite");
    };

    const goToMyLocation = () => {
        console.log(map.locate());
    };

    const getToolsSx = (): SxProps<Theme> => {
        if (lessThanMd) {
            return {
                zIndex: 999,
                position: "fixed",
                height: "stretch",
                left: "12px",
            };
        }
        return {
            zIndex: 999,
            position: "absolute",
            width: "stretch",
            bottom: "6%",
        };
    };

    return (
        <React.Fragment>
            {getTileLayer()}
            <Stack
                spacing={1}
                sx={{
                    zIndex: 999,
                    position: "absolute",
                    right: "12px",
                    top: "82px",
                }}
            >
                <Tooltip title="Mudar o mapa" arrow placement="left">
                    <Fab
                        aria-label="change-map-layers"
                        onClick={toggleMap}
                        size="medium"
                    >
                        <LayersIcon />
                    </Fab>
                </Tooltip>
                <Tooltip
                    title="Ir para minha localização"
                    arrow
                    placement="left"
                >
                    <Fab
                        aria-label="go-to-my-location"
                        onClick={goToMyLocation}
                        size="medium"
                    >
                        <MyLocationIcon />
                    </Fab>
                </Tooltip>
            </Stack>

            <Stack
                spacing={1}
                sx={getToolsSx()}
                direction={lessThanMd ? "column" : "row"}
                justifyContent="center"
            >
                <Tooltip title="Adicionar waypoint" arrow>
                    <Fab
                        aria-label="add-waypoint"
                        onClick={toggleMap}
                        size="medium"
                        color="primary"
                    >
                        <AddLocationIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="Setar casa" arrow>
                    <Fab
                        aria-label="set-home"
                        onClick={toggleMap}
                        size="medium"
                        color="primary"
                    >
                        <HomeIcon />
                    </Fab>
                </Tooltip>

                <Tooltip title="Executar ação especial" arrow>
                    <Fab
                        aria-label="run-special-action"
                        onClick={toggleMap}
                        size="medium"
                        color="primary"
                    >
                        <StarRateIcon />
                    </Fab>
                </Tooltip>
                <Divider />
                <Divider />
                <Divider />
                <Tooltip title="Deletar ponto" arrow>
                    <Fab
                        aria-label="delete"
                        onClick={toggleMap}
                        size="medium"
                        color="error"
                    >
                        <DeleteIcon />
                    </Fab>
                </Tooltip>
            </Stack>

            <Marker position={map.getCenter()}></Marker>
        </React.Fragment>
    );
};

export default InnerComponents;
