// Copyright (c) 2023 Rafael F. Meneses
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    Box,
    Container,
    IconButton,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GitHubIcon from "@mui/icons-material/GitHub";
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © Rafael F. Meneses "}

            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

interface SobreProps {}

const Sobre: FunctionComponent<SobreProps> = () => (
    <Box>
        <Container
            component="main"
            sx={{
                my: 2,
                height: "stretch",
            }}
            maxWidth="md"
        >
            <Typography variant="h3" component="h1" gutterBottom>
                Sobre
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                O que é Virote?
            </Typography>
            <Typography variant="body1">
                Um aplicativo para a criação de missões para RPAS (Remotely
                Piloted Aircraft System).
            </Typography>
            <br />
            <Typography variant="h5" component="h2" gutterBottom>
                O desenvolvimento
            </Typography>
            <Typography variant="body1">
                O aplicativo foi desenvolvido através de um acordo de cooperação
                técnica entre a Universidade Tecnológica Federal do paraná e a
                Associação de Pesquisa, Desenvolvimento e Tecnologia Hefestus.
            </Typography>
            <br />

            <Typography variant="h5" component="h2" gutterBottom>
                Licença
            </Typography>
            <Paper sx={{ p: 2 }}>
                <Typography variant="body2">
                    MIT License Copyright (c) 2023 Rafael F. Meneses
                </Typography>
                <br />
                <Typography variant="body2">
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the "Software"), to deal in the
                    Software without restriction, including without limitation
                    the rights to use, copy, modify, merge, publish, distribute,
                    sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so,
                    subject to the following conditions:
                </Typography>
                <br />
                <Typography variant="body2">
                    The above copyright notice and this permission notice shall
                    be included in all copies or substantial portions of the
                    Software.
                </Typography>
                <br />
                <Typography variant="body1">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                    KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
                    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </Typography>
            </Paper>
        </Container>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="md">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={2}>
                        <Tooltip title="Repositório no GitHub" arrow>
                            <IconButton
                                aria-label="github"
                                href="https://github.com/ZRafaF/virote"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Documentação" arrow>
                            <IconButton
                                aria-label="documentation"
                                href="https://zrafaf.github.io/virote/"
                                target="_blank"
                            >
                                <MenuBookIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Box>
                        <Copyright />
                    </Box>
                </Stack>
            </Container>
        </Box>
    </Box>
);

export default Sobre;
