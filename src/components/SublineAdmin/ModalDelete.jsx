import React from "react";
import { Box, Typography, Modal, Grid, Button } from "@mui/material";
import {deleteRequest} from "../../utils/api"
import ToastType from "../../utils/ToastType";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 400, sm: 700 },
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

const ModalDelete = ({ open, setOpen, titleModal, data }) => {
    const { name, descrip, imageView, id, nameline } = data;

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete =()=>{
        deleteRequest("/sublines/delete/"+id, async (result) => {
            // console.log(result)
            if (result.success) {
                ToastType("warning", result.msg);
            } else {
                ToastType("error", result.msg);
            }
        });
        handleClose()
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hideBackdrop={false}
        >
            <Box sx={style}>
                <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                >
                    <Grid item xs={12}>
                        <Typography
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            {titleModal}
                        </Typography>
                    </Grid>

                    <Grid item container xs={12}>
                        {/* Cuerpo */}
                        <Grid item xs={8} container spacing={0}>
                            <Grid item xs={12}>
                                <Typography variant="h6">Nombre:</Typography>
                                <Typography variant="subtitle1"> {nameline} -<u> {name} </u></Typography>
                                <Typography variant="h6">
                                    Descripción:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ width:"80%"}} >{descrip}</Typography>
                                <Typography variant="subtitle2" sx={{ width:"80%"}} color="red" >Todos los registros dependientes serán eliminados...</Typography>
                            </Grid>
                        </Grid>

                        {/* imagen */}
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={4}
                            sx={{ padding: 2 }}
                        >
                            <Grid item sx={{ marginRight: 8, border: 0.1 }}>
                                <img
                                    src={imageView}
                                    alt="ImgLine"
                                    width={200}
                                    height={180}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                            xs={12}
                        >
                            <Grid item>
                                <Button
                                    onClick={()=>handleDelete()}
                                    color="error"
                                    variant="contained"
                                    size="large"
                                >
                                    Si
                                </Button>
                                <Button
                                    onClick={handleClose}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        marginLeft: 2,
                                    }}
                                >
                                    No
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalDelete;
