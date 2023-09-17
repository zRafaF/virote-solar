// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import MissionDataContext from "contexts/missionDataContext";
import { FunctionComponent, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import WaypointsTableItem from "./WaypointsTableItem";

interface WaypointsTableProps {}

const WaypointsTable: FunctionComponent<WaypointsTableProps> = () => {
    const [missionData] = useContext(MissionDataContext);

    return (
        <TableContainer
            component={Paper}
            variant="outlined"
            style={{
                height: 300,
            }}
        >
            <Table aria-label="simple table" size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            sx={{ fontWeight: "bold" }}
                            padding="checkbox"
                        >
                            ID
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontWeight: "bold" }}
                            padding="checkbox"
                        >
                            Latitude
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontWeight: "bold" }}
                            padding="checkbox"
                        >
                            Longitude
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ fontWeight: "bold" }}
                            padding="checkbox"
                        >
                            Altura(m)
                        </TableCell>
                        <TableCell
                            align="center"
                            padding="checkbox"
                            sx={{ fontWeight: "bold" }}
                        >
                            Mais
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {missionData.waypoints.map((waypoint) => (
                        <WaypointsTableItem myWaypoint={waypoint} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WaypointsTable;
