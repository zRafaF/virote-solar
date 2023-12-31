// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Button, Container, Divider, Stack, Tooltip } from "@mui/material";
import React, { FunctionComponent, useContext, useMemo } from "react";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";
import MissionDataContext from "contexts/missionDataContext";
import { uploadMission } from "helper/api";
import { getMissionArray } from "helper/util";
import WaypointsTable from "./WaypointsTable/WaypointsTable";
import DeleteIcon from "@mui/icons-material/Delete";

interface MenuContentProps {}

function download(content: string, fileName: string, contentType: string) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const readJsonFile = (file: Blob) =>
    new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            if (event.target) {
                resolve(JSON.parse(event.target.result as string));
            }
        };

        fileReader.onerror = (error) => reject(error);
        fileReader.readAsText(file);
    });

const MenuContent: FunctionComponent<MenuContentProps> = () => {
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const parsedData = await readJsonFile(event.target.files[0]);

            console.log(parsedData);
            alert(parsedData);
        }
    };
    const [missionData, setMissionData] = useContext(MissionDataContext);

    const totalMissionDistance = useMemo(() => {
        let totalDist = 0;
        for (let i = 0; i < missionData.waypoints.length - 1; i++) {
            const currentWaypointPos = missionData.waypoints[i].position;
            const nextWaypointPos = missionData.waypoints[i + 1].position;
            totalDist += currentWaypointPos.distanceTo(nextWaypointPos);
        }
        return totalDist;
    }, [missionData]);

    const saveMissionData = () => {
        const myArray = getMissionArray(missionData.waypoints);

        download(JSON.stringify(myArray), "json.json", "text/plain");
    };

    const handleUploadMission = () => {
        uploadMission(missionData);
    };

    const handleDeleteMission = async () => {
        const confirmationText = "Tem certeza que deseja DELETAR ESSA MISSÃO?";
        if (window.confirm(confirmationText) === true) {
            setMissionData((old) => ({
                ...old,
                waypoints: [],
            }));
        }
    };

    const getFormattedDistance = () => {
        if (totalMissionDistance > 1500) {
            return `${(totalMissionDistance / 1000).toFixed(2)} km`;
        }
        return `${totalMissionDistance.toFixed(2)} m`;
    };

    return (
        <Container disableGutters sx={{ pl: { sm: 0, md: 2 } }}>
            <Stack spacing={2}>
                <Divider />
                <Stack direction="row" spacing={2} justifyContent={"center"}>
                    <Tooltip
                        title="Exportar missão para o seu dispositivo"
                        arrow
                    >
                        <Button
                            variant="outlined"
                            endIcon={<SaveIcon />}
                            fullWidth
                            onClick={saveMissionData}
                        >
                            Salvar
                        </Button>
                    </Tooltip>
                    <Tooltip title="Importar missão do seu dispositivo" arrow>
                        <Button
                            variant="outlined"
                            endIcon={<UploadFileIcon />}
                            component="label"
                            fullWidth
                        >
                            Carregar
                            <input
                                type="file"
                                accept=".json"
                                hidden
                                onChange={handleChange}
                            />
                        </Button>
                    </Tooltip>
                </Stack>
                <Divider />
                <WaypointsTable />
                Distancia total: {getFormattedDistance()}
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={"space-around"}
                >
                    <Tooltip title="Exclui a missão atual" arrow>
                        <Button
                            variant="contained"
                            color="error"
                            size="large"
                            endIcon={<DeleteIcon />}
                            onClick={handleDeleteMission}
                        >
                            Excluir
                        </Button>
                    </Tooltip>
                    <Tooltip title="Fazer upload da missão para a RPA" arrow>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            endIcon={<UploadIcon />}
                            onClick={handleUploadMission}
                        >
                            Upload
                        </Button>
                    </Tooltip>
                </Stack>
            </Stack>
        </Container>
    );
};

export default MenuContent;
