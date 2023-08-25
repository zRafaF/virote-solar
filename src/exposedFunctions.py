# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT
import eel
import serial
import json
import serial.tools.list_ports
from pymavlink import mavutil
from classes import *
import uav



@eel.expose
def get_available_ports_list():
    ports = serial.tools.list_ports.comports()
    ports_dict = []
    for port, desc, _ in sorted(ports):
        ports_dict.append({"port": port, "desc": desc})
    print(ports_dict)
    return ports_dict

@eel.expose
def connect_vehicle(connection_dict):
    print(connection_dict)
    pass


@eel.expose
def hearth_beat():
    return True


def generate_mavlink_messages(mission_data: MissionDataType):
    mavlink_messages = []

    for waypoint in mission_data.waypoints:
        mavlink_message = mavutil.mavlink.MAVLink_mission_item_int_message(
            target_system=1,
            target_component=1,
            seq=waypoint.id,
            frame=mavutil.mavlink.MAV_FRAME_GLOBAL_RELATIVE_ALT,
            command=mavutil.mavlink.MAV_CMD_NAV_WAYPOINT,
            current=0,
            autocontinue=1,
            param1=0,
            param2=0,
            param3=0,
            param4=0,
            x=int(waypoint.position.lng),
            y=int(waypoint.position.lat),
            z=int(waypoint.height),
        )
        mavlink_messages.append(mavlink_message)

    return mavlink_messages


@eel.expose
def upload_mission(mission_data_dict):
    mission_data = MissionDataType.from_dict(mission_data_dict)
    messages = generate_mavlink_messages(mission_data)

    # TODO Add functionality to this code
    pass

"""

def upload_to_uav(messages: list):
    mav.waypoint_clear_all_send()
    mav.waypoint_count_send(wp.count())

"""