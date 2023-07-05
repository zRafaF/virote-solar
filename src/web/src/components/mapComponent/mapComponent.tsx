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
                <line
                    x1="calc(50% - 20px)"
                    y1="50%"
                    x2="calc(50% + 20px)"
                    y2="50%"
                />
                <line
                    x1="50%"
                    y1="calc(50% - 20px)"
                    x2="50%"
                    y2="calc(50% + 20px)"
                />
            </svg>
        </div>
    );
};

export default MapComponent;
