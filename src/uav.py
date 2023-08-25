# Copyright (c) 2023 Rafael F. Meneses
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT
"""
from pymavlink import mavutil
from dronekit import connect

baud_rate = 57600
ehSimulacao = False


def conectarV():
    if ehSimulacao:
        return connect("udpin:localhost:14551")
    else:
        return connect("/dev/ttyAMA0", baud=baud_rate, wait_ready=False)


print("Aguardando conexao")
vehicle = None
the_connection = None  # vehicle._master
print("Conectado!")

"""
