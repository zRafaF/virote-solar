// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useCallback, useEffect, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { CustomWaypointType } from "types/CustomWaypoint";

const useClosestWaypoint = (
    waypoints: CustomWaypointType[],
    debounceTime: number = 100
) => {
    const map = useMap();
    const [closestWaypoint, setClosestWaypoint] = useState<
        CustomWaypointType | undefined
    >(undefined);
    const [onTimer, setOnTimer] = useState<boolean>(false);

    useMapEvents({
        move() {
            if (onTimer) {
                return;
            }
            setOnTimer(true);
        },
    });
    const updateClosestWaypoint = useCallback(() => {
        if (map) {
            const center = map.getCenter();

            // Find the closest waypoint to the center of the map
            let closestDistance = Number.MAX_VALUE;
            let closestWaypoint: CustomWaypointType | undefined = undefined;

            waypoints.forEach((waypoint) => {
                const waypointPosInPixel = map.latLngToLayerPoint(
                    waypoint.position
                );
                const centerPosInPixel = map.latLngToLayerPoint(center);
                const distanceInPixels =
                    centerPosInPixel.distanceTo(waypointPosInPixel);
                if (distanceInPixels < closestDistance) {
                    closestDistance = distanceInPixels;
                    closestWaypoint = waypoint;
                }
            });
            if (closestDistance < 50) {
                setClosestWaypoint(closestWaypoint);
            } else setClosestWaypoint(undefined);
        }
    }, [map, waypoints]);

    useEffect(() => {
        if (!onTimer) return;
        setTimeout(() => {
            setOnTimer(false);
            updateClosestWaypoint();
        }, debounceTime);
    }, [onTimer, updateClosestWaypoint, debounceTime]);

    useEffect(() => {
        updateClosestWaypoint();
    }, [waypoints, updateClosestWaypoint]);

    return [closestWaypoint, updateClosestWaypoint] as const;
};

export default useClosestWaypoint;
