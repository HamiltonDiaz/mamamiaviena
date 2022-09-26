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
import { routeImg} from "../../utils/Functions"
import ModalCreate from "./ModalCreate";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalView from "./ModalView";

const SublineAdmin = () => {
    const [sublines, setSublines] = useState(null);
    const [lines, setLines] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [openDelete, setOpendelete] = useState(false);
    const handleOpenDelete = () => setOpendelete(true);
    
    const [openEdit, setOpenedit] = useState(false);
    const handleOpenEdit = () => setOpenedit(true);
    
    const [openView, setOpenview] = useState(false);
    const [dataView, setDataview] = useState({});
    const handleOpenView = () => setOpenview(true);
    
    const ModalViewHead=({item})=>{
        return(            
            <ModalView
            open={openView}
            setOpen={setOpenview}
            titleModal={"Ver Linea"}
            data={{
                imageView: routeImg(item.image),
                name: item.name,
                descrip: item.descrip,
                nameline:item.nameline,
            }}/>
        )
    }

    const ModalDeleteHead=({item})=>{
        return(            
            <ModalDelete
            open={openDelete}
            setOpen={setOpendelete}
            titleModal={"¿Desea elminar este registro?"}
            data={{
                imageView: routeImg(item.image),
                name: item.name,
                descrip: item.descrip,
                id: item.id,
                nameline:item.nameline
            }}
        />
        )
    }

    const ModalEditHead=({item})=>{
        return(            
            <ModalEdit
            open={openEdit}
            setOpen={setOpenedit}
            titleModal={"Editar registro"}
            prevData={{
                imageView: routeImg(item.image),
                imgold:item.image,
                namePrev: item.name,
                descripPrev: item.descrip,
                id: item.id,
                statePrev:item.stateitem=1?true : false,
                // statePrev:item.stateitem,
                nameline:item.nameline,
            }}
            lines={lines}
        />
        )
    }

    useEffect(() => {
        getRequest("/sublines", async (result) => {
            if (result.success) {
                setSublines(result.data["sublines"]);
                setLines(result.data["lines"]);
                // console.log(result.data);

            }
        });
    }, [open, openDelete, openEdit]);

    return (
        <>
            <ModalCreate
                open={open}
                setOpen={setOpen}
                titleModal={"Nueva SubLinea"}
                lines={lines}
            />
            <ModalEditHead item={dataView} />
            <ModalDeleteHead item={dataView}/>
            <ModalViewHead item={dataView}/>
            
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Linea</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sublines &&
                        sublines.map((item, id) => (
                            <tr key={item.name + id}>
                                <td>{id + 1}</td>
                                <td>{item.nameline}</td>
                                <td>{item.name}</td>
                                <td>{item.descrip}</td>
                                <td>{item.stateitem==1? "Activo": "Inactivo"}</td>
                                <td>
                                    <IconButton
                                        aria-label="view"
                                        onClick={() => {
                                            setDataview(item)
                                            handleOpenView()
                                        }}
                                    >
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="edit"
                                        color="success"
                                        onClick={() => {
                                            setDataview(item)
                                            handleOpenEdit()
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        color="error"
                                        onClick={() => {
                                            setDataview(item)
                                            handleOpenDelete()
                                        }}
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

export default SublineAdmin;
