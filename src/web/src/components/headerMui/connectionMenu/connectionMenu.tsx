// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Popover,
    Select,
    Stack,
    Tooltip,
} from "@mui/material";
import React, { FunctionComponent, useContext, useEffect } from "react";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import GlobalAccessContext from "contexts/globalAccessContext";
import { toast } from "react-toastify";
import RefreshIcon from "@mui/icons-material/Refresh";
import PowerIcon from "@mui/icons-material/Power";
import { getAvailablePorts } from "helper/api";

const baudRates = [
    "1200",
    "1800",
    "2400",
    "4800",
    "9600",
    "19200",
    "38400",
    "57600",
    "115200",
    "230400",
    "460800",
    "500000",
    "576000",
    "921600",
    "1000000",
    "1152000",
    "1500000",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};
interface connectionMenuProps {}

const ConnectionMenu: FunctionComponent<connectionMenuProps> = () => {
    const [globalAccess, setGlobalAccess] = useContext(GlobalAccessContext);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const refreshPortsList = () => {
        toast.promise(
            getAvailablePorts().then((response) => {
                setGlobalAccess((state: any) => ({
                    ...state,
                    ports: response,
                }));
            }),
            {
                pending: {
                    render: "Atualizando lista de portas...",
                    delay: undefined,
                },
                success: "Lista de portas atualizada 👌",
                error: "Não foi possível atualizar a lista de portas 🤯",
            },
            {
                autoClose: 2000,
                draggable: true,
                closeOnClick: true,
            }
        );
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const getComOptions = (): string[] => {
        let resultArray: string[] = [];

        globalAccess.ports.forEach((element: PortType) => {
            resultArray.push(element.port + " | " + element.desc);
            console.log(element);
        });

        return resultArray;
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            port: data.get("port-select"),
            baud: data.get("baud-rate"),
        });
    };

    useEffect(() => {
        getAvailablePorts().then((response) => {
            setGlobalAccess((state: any) => ({
                ...state,
                ports: response,
            }));
        });
    }, [setGlobalAccess]);
    return (
        <React.Fragment>
            <Tooltip title="Abrir configurações de conexão">
                <Button
                    variant="contained"
                    color="error"
                    endIcon={<ElectricalServicesIcon />}
                    onClick={handleClick}
                >
                    Conexão
                </Button>
            </Tooltip>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ p: 2, width: 220 }}
                >
                    <Stack spacing={3}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={refreshPortsList}
                            endIcon={<RefreshIcon />}
                        >
                            Atualizar portas
                        </Button>
                        <FormControl margin="normal" size="small" required>
                            <InputLabel id="demo-simple-select-label">
                                Porta
                            </InputLabel>
                            <Select
                                labelId="port-select-label"
                                id="port-select"
                                name="port-select"
                                label="Porta"
                                MenuProps={MenuProps}
                                defaultValue={""}
                            >
                                <MenuItem value={""}>&nbsp;</MenuItem>
                                {getComOptions().map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl margin="normal" size="small" required>
                            <InputLabel id="demo-simple-select-label">
                                Baud Rate
                            </InputLabel>
                            <Select
                                labelId="baud-rate-label"
                                id="baud-rate"
                                name="baud-rate"
                                label="Baud Rate"
                                MenuProps={MenuProps}
                                defaultValue={""}
                            >
                                <MenuItem value={""}>&nbsp;</MenuItem>
                                {baudRates.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<PowerIcon />}
                            size="large"
                            color="success"
                        >
                            Conectar
                        </Button>
                    </Stack>
                </Box>
            </Popover>
        </React.Fragment>
    );
};

export default ConnectionMenu;
