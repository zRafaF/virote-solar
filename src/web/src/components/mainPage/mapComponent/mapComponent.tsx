// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//import ImagePlaceHolder from "./mapPlaceHolder.png";

import React, { FC } from "react";
import styleModule from "./mapComponent.module.css";

import { MapContainer } from "react-leaflet";
import InnerComponents from "./innerComponents/innerComponents";

interface MapComponentProps {}

const MapComponent: FC<MapComponentProps> = () => {
    return (
        <div className={styleModule.map_div}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={3}
                style={{ zIndex: 30 }}
            >
                <InnerComponents />
            </MapContainer>
            <svg className={styleModule.target_svg}>
                <line x1="0" y1="50%" x2="100%" y2="50%" />
                <line x1="50%" y1="0" x2="50%" y2="100%" />
            </svg>
        </div>
    );
};

export default MapComponent;
