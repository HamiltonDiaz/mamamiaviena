import React from "react";
import {
    Box,
    Typography,
    Modal,
    Grid,
    Button,
} from "@mui/material";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 400, sm: 700 },
    // bgcolor:"#F26968", //Rosado Intenso
    // bgcolor:"#323339",
    // bgcolor:"#6CBF84",
    // bgcolor:"#FFFFFF",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

const ModalView = ({ open, setOpen, titleModal, data }) => {
    const {name, descrip, imageView, nameline }=data

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hideBackdrop={false}
            // sx={{"& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop":{
            //     backgroundColor: "rgba(0, 0, 0, 0)",
            // }}}
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
                    <Grid item>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {titleModal}
                        </Typography>
                    </Grid>

                    <Grid item container xs={12}>
                        {/* Formulario */}
                        <Grid item xs={8}>
                                <Typography variant="h6">
                                    Nombre:
                                </Typography>
                                <Typography variant="subtitle1">
                                   {nameline} -<u> {name} </u>
                                </Typography>
                                
                                <Typography variant="h6">
                                    Descripción:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ width:"80%"}} >
                                    {descrip}
                                </Typography>                                
                            
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={4}
                            sx={{ padding: 2 }}
                        >
                            <Grid item sx={{marginRight:8, border:0.1, }}>
                       
                                    <img
                                        src={imageView}
                                        alt="ImgLine"
                                        width={300}
                                        height={250}
                                    />
                            
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end">
         
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            color="error"
                            size="large"
                            sx={{
                                marginLeft: 2,
                            }}
                        >
                            Cerrar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalView;
