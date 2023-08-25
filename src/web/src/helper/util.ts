// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CustomWaypointType, MissionPointType } from "types/CustomWaypoint";

export function getMissionArray(
    waypoints: CustomWaypointType[]
): MissionPointType[] {
    return waypoints.map((wp) => [wp.position.lat, wp.position.lng, wp.height]);
}
