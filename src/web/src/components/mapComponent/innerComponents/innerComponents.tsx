// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, {
    useState,
    FC,
    useContext,
    useMemo,
    useRef,
    useEffect,
    useCallback,
} from "react";

import { TileLayer, useMap, useMapEvents } from "react-leaflet";
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
import WaypointComponent from "./waypointComponent";
import MissionDataContext from "contexts/missionDataContext";
import { CustomWaypointType } from "types/CustomWaypoint";
type mapType = "satellite" | "street";

interface InnerComponentsProps {}

const InnerComponents: FC<InnerComponentsProps> = () => {
    const map = useMap();
    const [missionData, setMissionData] = useContext(MissionDataContext);

    const [onTimer, setOnTimer] = useState<boolean>(false);

    const handleMapMove = async () => {
        if (onTimer) {
            return;
        }
        setOnTimer(true);
    };

    const updateClosestWaypoint = useCallback(() => {
        if (map) {
            const center = map.getCenter();

            // Find the closest waypoint to the center of the map
            let closestWaypoint: CustomWaypointType | null = null;
            let closestDistance = Number.MAX_VALUE;

            missionData.waypoints.forEach((waypoint) => {
                const distance = center.distanceTo(waypoint.position);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestWaypoint = waypoint;
                }
            });

            if (closestWaypoint) {
                console.log(closestWaypoint);
                //setSelectedWaypoint(closestWaypoint.id);
            }
        }
    }, [map, missionData.waypoints]);

    useEffect(() => {
        if (!onTimer) return;
        setTimeout(() => {
            setOnTimer(false);
            updateClosestWaypoint();
        }, 200); // Debounce delay of 300 milliseconds (0.3 seconds)
    }, [onTimer, updateClosestWaypoint]);

    useEffect(() => {
        updateClosestWaypoint();
    }, [missionData, updateClosestWaypoint]);

    /* eslint-disable */
    useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, 16);
        },
        move() {
            handleMapMove();
        },
    });
    /* eslint-enable */
    const theme = useTheme();
    const lessThanMd = useMediaQuery(theme.breakpoints.down("md"));
    const markerRef = useRef(null);

    const [currentMapType, setCurrentMapType] = useState<mapType>("satellite");

    useEffect(() => {
        console.log(map.getSize().x / 2);
        console.log(map.getSize().y / 2);
    }, [map]);
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

    const addWaypoint = () => {
        setMissionData((prevMissionData) => {
            const currentNumOfWaypoints = prevMissionData.waypoints.length;

            prevMissionData.waypoints.push({
                id: currentNumOfWaypoints
                    ? prevMissionData.waypoints[currentNumOfWaypoints - 1].id +
                      1
                    : 0,
                position: map.getCenter(),
            });
            return {
                ...prevMissionData,
            };
        });
    };

    const deleteWaypoint = () => {
        console.log(map.getSize().x / 2);
        console.log(map.getSize().y / 2);

        missionData.waypoints.forEach((element) => {
            console.log(element);
        });

        return;
    };

    useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                }
            },
            click: (e: any) => {
                console.log("marker" + e.containerPoint); // markerPoint
                console.log(e); // Center
            },
        }),
        []
    );

    const getMarkers = () => {
        return missionData.waypoints?.map((element, idx) => (
            <WaypointComponent
                position={element.position}
                key={"waypoint_" + idx}
                onClick={() => {
                    alert(1);
                }}
                selected={false}
            />
        ));
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
                        onClick={addWaypoint}
                        size="medium"
                        color="success"
                    >
                        <AddLocationIcon />
                    </Fab>
                </Tooltip>
                <Divider />
                <Divider />
                <Divider />
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
                        onClick={deleteWaypoint}
                        size="medium"
                        color="error"
                    >
                        <DeleteIcon />
                    </Fab>
                </Tooltip>
            </Stack>
            {getMarkers()}
        </React.Fragment>
    );
};

export default InnerComponents;
