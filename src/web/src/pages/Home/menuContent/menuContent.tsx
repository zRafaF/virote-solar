// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Button, Container, Divider, Stack } from "@mui/material";
import React, { FunctionComponent } from "react";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";
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

    const saveMissionData = () => {
        const myArray = [
            [1373628934214, 3],
            [1373628934218, 3],
            [1373628934220, 1],
            [1373628934230, 1],
            [1373628934234, 0],
            [1373628934237, -1],
            [1373628934242, 0],
            [1373628934246, -1],
            [1373628934251, 0],
            [1373628934266, 11],
        ];

        download(JSON.stringify(myArray), "json.json", "text/plain");
    };
    return (
        <Container disableGutters sx={{ pl: { sm: 0, md: 2 } }}>
            <Stack spacing={2}>
                <Divider />
                <Stack direction="row" spacing={2} justifyContent={"center"}>
                    <Button
                        variant="outlined"
                        endIcon={<SaveIcon />}
                        fullWidth
                        onClick={saveMissionData}
                    >
                        Salvar
                    </Button>
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
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2} justifyContent={"center"}>
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        endIcon={<UploadIcon />}
                    >
                        Upload
                    </Button>
                </Stack>
                <Divider />
            </Stack>
        </Container>
    );
};

export default MenuContent;
