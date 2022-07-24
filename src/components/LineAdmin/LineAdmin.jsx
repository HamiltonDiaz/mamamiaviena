import React from "react";
import { IconButton, ButtonGroup, Fab, Box } from "@mui/material";

import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import {setCookie, getCookie} from "../../utils/CookiesUtil"

const LineAdmin = () => {
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>email</th>
                        <th>estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>
                            <IconButton aria-label="delete">
                                <VisibilityIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="success">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="error">
                                <DeleteIcon />
                            </IconButton>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <IconButton aria-label="delete" >
                                <VisibilityIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="success" >
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="error"  >
                                <DeleteIcon />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 16,
                    backgroundColor: "#fffff",
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </>
    );
};

export default LineAdmin;
