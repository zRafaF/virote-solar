// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { LatLng } from "leaflet";

export type CustomWaypointType = {
    id: number;
    position: LatLng;
    height: number;
};

export type MissionPointType = [number, number, number];
