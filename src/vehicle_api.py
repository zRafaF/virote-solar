# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT
from pymavlink import mavutil


class Vehicle:
    def __init__(self):
        self.the_connection = None

    def connect_to_uav(self, port: str, baud: str):
        connection_string = f"serial:{port}:{baud}"

        print(f"Connection string: {connection_string}")
        # Start a connection listening on a UDP port
        # the_connection = mavutil.mavlink_connection('udpin:localhost:14540')
        self.the_connection = mavutil.mavlink_connection(connection_string)

        # Wait for the first heartbeat
        #   This sets the system and component ID of remote system for the link
        self.the_connection.wait_heartbeat()
        print(
            "Heartbeat from system (system %u component %u)"
            % (self.the_connection.target_system, self.the_connection.target_component)
        )
        return 1

    def send_message(message):
        print(f"my message {message}")
        pass


the_vehicle = Vehicle()
