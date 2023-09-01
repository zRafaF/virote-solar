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

interface WaypointsTableProps {}

const WaypointsTable: FunctionComponent<WaypointsTableProps> = () => {
    const [missionData] = useContext(MissionDataContext);

    return (
        <TableContainer component={Paper} variant="outlined">
            <Table aria-label="simple table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Latitude</TableCell>
                        <TableCell align="right">Longitude</TableCell>
                        <TableCell align="right">Altura</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {missionData.waypoints.map((row) => (
                        <TableRow
                            key={`lat: ${row.position.lat}, lng: ${row.position.lng}`}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">
                                {row.position.lat.toFixed(3)}
                            </TableCell>
                            <TableCell align="right">
                                {row.position.lng.toFixed(3)}
                            </TableCell>
                            <TableCell align="right">
                                {row.height.toFixed(3)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WaypointsTable;
