// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { FunctionComponent } from "react";
import { CustomWaypointType } from "types/CustomWaypoint";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import MissionDataContext from "contexts/missionDataContext";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import StarRateIcon from "@mui/icons-material/StarRate";

interface WaypointsTableItemProps {
    myWaypoint: CustomWaypointType;
}

const WaypointsTableItem: FunctionComponent<WaypointsTableItemProps> = ({
    myWaypoint,
}) => {
    const [, setMissionData] = useContext(MissionDataContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteWaypiont = () => {
        handleClose();
        setMissionData((prevMissionData) => {
            const waypointIdToDelete = myWaypoint.id;
            prevMissionData.waypoints.splice(waypointIdToDelete, 1);
            for (
                let i = waypointIdToDelete;
                i < prevMissionData.waypoints.length;
                i++
            ) {
                prevMissionData.waypoints[i].id = i;
            }

            return {
                ...prevMissionData,
            };
        });
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value);

        setMissionData((oldMission) => {
            oldMission.waypoints[myWaypoint.id].height = newHeight;
            return { ...oldMission };
        });
    };

    const ExtraMenu = () => (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <MenuItem onClick={handleDeleteWaypiont}>
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Remover</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    );

    const getWaypointSymbol = () => {
        switch (myWaypoint.type) {
            case "waypoint":
                return <PlaceIcon color="primary" />;
            case "home":
                return <HomeIcon color="secondary" />;
            case "action":
                return <StarRateIcon color="success" />;

            default:
                return <PlaceIcon color="primary" />;
        }
    };

    return (
        <React.Fragment>
            <TableRow
                key={`lat: ${myWaypoint.position.lat}, lng: ${myWaypoint.position.lng}`}
                sx={{
                    "&:last-child td, &:last-child th": {
                        border: 0,
                    },
                }}
            >
                <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    padding="checkbox"
                >
                    {getWaypointSymbol()}
                </TableCell>
                <TableCell align="center" padding="checkbox">
                    {myWaypoint.position.lat.toFixed(3)}
                </TableCell>
                <TableCell align="center" padding="checkbox">
                    {myWaypoint.position.lng.toFixed(3)}
                </TableCell>
                <TableCell align="center" padding="checkbox">
                    <TextField
                        type="number"
                        id="outlined-basic"
                        variant="standard"
                        size="small"
                        margin="dense"
                        onChange={handleHeightChange}
                        value={myWaypoint.height}
                    />
                </TableCell>
                <TableCell align="center" padding="checkbox">
                    <Tooltip
                        title="Mais opções do waypoint"
                        arrow
                        placement="left"
                    >
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
            <ExtraMenu />
        </React.Fragment>
    );
};

export default WaypointsTableItem;
