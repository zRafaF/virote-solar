// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { useState, FC } from "react";
import styleModule from "./innerComponents.module.css";

import { TileLayer, useMap, Marker } from "react-leaflet";
import CustomButton from "../../../customButton/customButton";
import { MdOutlineLayers } from "react-icons/md";

type mapType = "satellite" | "street";

interface InnerComponentsProps {}

const InnerComponents: FC<InnerComponentsProps> = () => {
    const map = useMap();
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

    return (
        <React.Fragment>
            {getTileLayer()}{" "}
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
            <Marker position={map.getCenter()}></Marker>
        </React.Fragment>
    );
};

export default InnerComponents;
