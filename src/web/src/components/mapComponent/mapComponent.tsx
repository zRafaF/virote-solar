// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//import ImagePlaceHolder from "./mapPlaceHolder.png";

import { FC } from "react";
import styleModule from "./mapComponent.module.css";

import { MapContainer } from "react-leaflet";
import InnerComponents from "./innerComponents/innerComponents";

interface MapComponentProps {}

const MapComponent: FC<MapComponentProps> = () => {
    return (
        <div className={styleModule.map_div}>
            <MapContainer center={[51.505, -0.09]} zoom={3}>
                <InnerComponents />
            </MapContainer>
            <svg className={styleModule.target_svg}>
                <line x1="0" y1="20px" x2="40px" y2="20px" />
                <line x1="20px" y1="0px" x2="20px" y2="40px" />
            </svg>
        </div>
    );
};

export default MapComponent;
