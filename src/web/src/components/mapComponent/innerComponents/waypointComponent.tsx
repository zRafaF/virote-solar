// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// @ts-nocheck
import { LatLngExpression } from "leaflet";
import { FunctionComponent } from "react";
import { Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

const LeafIcon = L.Icon.extend({
    options: {},
});

const normalIcon = new LeafIcon({
    iconUrl: process.env.PUBLIC_URL + `/resources/marker-icon.png`,
    iconAnchor: [13, 41],
});

const selectedIcon = new LeafIcon({
    iconUrl: process.env.PUBLIC_URL + `/resources/marker-icon-selected.png`,
    iconAnchor: [13, 41],
});

// https://opensource.org/licenses/MIT
interface WaypointComponentProps {
    position: LatLngExpression;
    onClick: () => void;
    selected: boolean;
}

const WaypointComponent: FunctionComponent<WaypointComponentProps> = ({
    position,
    onClick,
    selected,
}) => {
    return (
        <Marker
            position={position}
            eventHandlers={{ click: onClick }}
            icon={selected ? selectedIcon : normalIcon}
        >
            <Popup>
                {/* Content for the popup */}
                Waypoint Information
            </Popup>
        </Marker>
    );
};

export default WaypointComponent;
