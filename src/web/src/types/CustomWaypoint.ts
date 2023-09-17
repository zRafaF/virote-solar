// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { LatLng } from "leaflet";

export type WaypointType = "waypoint" | "home" | "action";

export type CustomWaypointType = {
    id: number;
    position: LatLng;
    height: number;
    type: WaypointType;
};

export type MissionPointType = [number, number, number];
