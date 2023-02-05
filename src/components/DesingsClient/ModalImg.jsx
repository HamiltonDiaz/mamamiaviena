import React from "react";
import { Box, Typography, Modal, Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { routeImg, msgWhatsapp } from "../../utils/Functions";
import { global } from "../../utils/utils";
import { nuestrosDisenios } from "../../utils/Routes"
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 350, sm: 400 },
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

const ModalImg = ({ handleClose, open, imgModal, titleModal, description, id }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
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
                    <Grid item xs={12}>
                        <img
                            src={routeImg(imgModal)}
                            alt={titleModal}
                            loading="lazy"
                            width={"100%"}
                            height={300}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography id="modal-modal-description">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end" spacing={2}>

                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                size="small"
                                startIcon={<WhatsAppIcon />}
                                target="_blank"
                                href={msgWhatsapp(
                                    "¡Hola!, me gustaría saber más acerca de este producto " +
                                    `${global.urlHome}${nuestrosDisenios}/${id}`
                                )}

                            >
                                ¡Lo quiero!
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                color="error"
                                size="small"
                                startIcon={<CloseIcon />}                        
                            >
                                Cerrar
                            </Button>
                        </Grid>


                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalImg;
