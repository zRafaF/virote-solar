// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { MissionDataType } from "contexts/missionDataContext";
import { toast } from "react-toastify";

export const eel = window.eel;
try {
    eel.set_host("ws://localhost:8080");
    toast.success("Conexão estabelecida");
} catch {
    toast.error("Não foi possível conectar com o backend");
}

export async function callEelFunc() {
    try {
        eel.my_func();
    } catch (error) {}
}

export async function getAvailablePorts(): Promise<PortType[]> {
    return eel.get_available_ports_list()();
}

export async function uploadMission(mission: MissionDataType): Promise<number> {
    return eel.upload_mission(mission)();
}

export async function connectToUav(port: any, baud: any) {
    console.log("port " + port + " baud " + baud);
    return eel.upload_mission({
        port: port,
        baud: baud,
    })();
}
