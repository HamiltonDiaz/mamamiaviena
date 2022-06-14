import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

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

const ModalImg = ({ handleClose, open, imgModal, titleModal }) => {
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
                            src={imgModal}
                            alt={titleModal}
                            loading="lazy"
                            width={"100%"}
                            height={300}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography id="modal-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ModalImg;
