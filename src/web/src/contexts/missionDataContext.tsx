// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {
    Dispatch,
    FunctionComponent,
    SetStateAction,
    createContext,
    useState,
} from "react";
import { CustomWaypointType } from "types/CustomWaypoint";

export interface MissionDataType {
    waypoints: CustomWaypointType[];
}

const MissionDataDefault: MissionDataType = {
    waypoints: [],
};

const MissionDataContext = createContext<
    [MissionDataType, Dispatch<SetStateAction<MissionDataType>>]
>([{ ...MissionDataDefault }, () => {}]);

export default MissionDataContext;

interface GlobalAccessProviderProps {
    children: any;
}

export const MissionDataProvider: FunctionComponent<
    GlobalAccessProviderProps
> = ({ children }) => {
    const [missionData, setMissionData] = useState(MissionDataDefault);

    return (
        <MissionDataContext.Provider value={[missionData, setMissionData]}>
            {children}
        </MissionDataContext.Provider>
    );
};
