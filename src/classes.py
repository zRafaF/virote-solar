# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT


class LatLng:
    def __init__(self, lat: float, lng: float) -> None:
        self.lat = lat
        self.lng = lng


class CustomWaypointType:
    def __init__(self, id: int, position: LatLng, height: float) -> None:
        self.id = id
        self.position = position
        self.height = height


class MissionDataType:
    def __init__(self, waypoints: list[CustomWaypointType]):
        self.waypoints = waypoints

    @classmethod
    def from_dict(cls, input_dict):
        waypoints_list = []
        for waypoint_data in input_dict["waypoints"]:
            waypoint_id = waypoint_data["id"]
            position_data = waypoint_data["position"]
            waypoint_position = LatLng(position_data["lat"], position_data["lng"])
            waypoint_height = waypoint_data["height"]

            custom_waypoint = CustomWaypointType(
                waypoint_id, waypoint_position, waypoint_height
            )
            waypoints_list.append(custom_waypoint)

        return cls(waypoints_list)

    def __str__(self):
        waypoints_str = "\n".join(
            f"Waypoint {waypoint.id}:\n"
            f"  Position: lat={waypoint.position.lat}, lng={waypoint.position.lng}\n"
            f"  Height: {waypoint.height}\n"
            for waypoint in self.waypoints
        )
        return f"MissionDataType({waypoints_str})"
