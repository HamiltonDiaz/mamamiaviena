import React, { useEffect, useState } from "react";
import { IconButton, Fab, Box } from "@mui/material";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRequest } from "../../utils/api";
import ModalLine from "./ModalLine";

const LineAdmin = () => {
    const [lines, setLines] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    

    useEffect(() => {
        getRequest("/line", async (result) => {
            if (result.success) {
                setLines(result.data);
                // console.log(result.data);
            }
        });
    }, []);


    return (
        <>
            <ModalLine
                open={open}
                setOpen={setOpen}
                titleModal={"Nueva Linea"}
            />
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lines &&
                        lines.map((item, id) => (
                            <tr key={item.name+id} >
                                <td>{id + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.descrip}</td>
                                <td>
                                    <IconButton aria-label="delete">
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="edit"
                                        color="success"
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
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
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => handleOpen()}
                >
                    <AddIcon />
                </Fab>
            </Box>
            <ToastContainer />
        </>
    );
};

export default LineAdmin;
