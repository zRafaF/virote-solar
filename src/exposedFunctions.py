# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT
import eel
import serial
import json
import serial.tools.list_ports


@eel.expose
def get_available_ports_list():
    ports = serial.tools.list_ports.comports()
    ports_dict = []
    for port, desc, _ in sorted(ports):
        ports_dict.append({"port": port, "desc": desc})
    print(ports_dict)
    return ports_dict


@eel.expose
def hearth_beat():
    return True
