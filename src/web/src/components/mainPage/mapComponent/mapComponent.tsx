// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

//import ImagePlaceHolder from "./mapPlaceHolder.png";

import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface MapComponentProps {}

const MapComponent: FC<MapComponentProps> = () => {
    return (
        <MapContainer
            //@ts-ignore
            center={[51.505, -0.09]}
            zoom={3}
            style={{ zIndex: 30 }}
        >
            <TileLayer
                //@ts-ignore
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                subdomains={["mt1", "mt2", "mt3"]}
            />
        </MapContainer>
    );
};

export default MapComponent;
