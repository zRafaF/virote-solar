// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React, { useState, FC } from "react";
import styleModule from "./innerComponents.module.css";

import { TileLayer, useMap, Marker, useMapEvents } from "react-leaflet";
import { MdOutlineLayers, MdMyLocation } from "react-icons/md";
import CustomButton from "components/customButton/customButton";

type mapType = "satellite" | "street";

interface InnerComponentsProps {}

const InnerComponents: FC<InnerComponentsProps> = () => {
    const map = useMap();
    // eslint-disable-next-line no-unused-vars
    const mapEvents = useMapEvents({
        locationfound(e) {
            map.flyTo(e.latlng, 16);
        },
    });

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
            <CustomButton
                toolTip="Ir para meu local"
                key={"myLocation"}
                buttonKey={"myLocation"}
                preIcon={<MdMyLocation />}
                iconSize={"var(--font_s)"}
                className={styleModule.my_position}
                clickCallBack={goToMyLocation}
                color={"black"}
            ></CustomButton>
            <Marker position={map.getCenter()}></Marker>
        </React.Fragment>
    );
};

export default InnerComponents;
