// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//import ImagePlaceHolder from "./mapPlaceHolder.png";

import React, { FC, useState } from "react";
import styleModule from "./mapComponent.module.css";

import { MapContainer, TileLayer } from "react-leaflet";
import CustomButton from "../../customButton/customButton";
import { MdOutlineLayers } from "react-icons/md";

type mapType = "satellite" | "street";

interface MapComponentProps {}

const MapComponent: FC<MapComponentProps> = () => {
    const [currentMap, setCurrentMap] = useState<mapType>("satellite");

    const getTileLayer = (): JSX.Element => {
        switch (currentMap) {
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
        if (currentMap === "satellite") setCurrentMap("street");
        else setCurrentMap("satellite");
    };

    return (
        <MapContainer center={[51.505, -0.09]} zoom={3} style={{ zIndex: 30 }}>
            {getTileLayer()}
            <CustomButton
                toolTip="Trocar mapa"
                key={"layerToggle"}
                buttonKey={"layerToggle"}
                preIcon={<MdOutlineLayers />}
                iconSize={"var(--font_s)"}
                className={styleModule.layer_toggle}
                clickCallBack={toggleMap}
                color={"black"}
            ></CustomButton>
        </MapContainer>
    );
};

export default MapComponent;
