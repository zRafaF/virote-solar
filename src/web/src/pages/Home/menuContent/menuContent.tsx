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

const MenuContent: FunctionComponent<MenuContentProps> = () => {
    return (
        <Container disableGutters sx={{ pl: { sm: 0, md: 2 } }}>
            <Stack spacing={2}>
                <Divider />
                <Stack direction="row" spacing={2} justifyContent={"center"}>
                    <Button variant="outlined" endIcon={<SaveIcon />} fullWidth>
                        Salvar
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<UploadFileIcon />}
                        fullWidth
                    >
                        Carregar
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
