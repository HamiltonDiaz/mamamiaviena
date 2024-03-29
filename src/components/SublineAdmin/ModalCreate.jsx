import React, { useState } from "react";
import {
    Box,
    Typography,
    Modal,
    Grid,
    Button,
    TextField,
    CircularProgress,
    Autocomplete,
} from "@mui/material";
import { postRequestFile } from "../../utils/api";
import ToastType from "../../utils/ToastType";

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

const ModalCreate = ({ open, setOpen, titleModal, lines }) => {
    const [data, setData] = useState({
        name: "",
        descrip: "",
        imageView: null,
        nameline: "",
        lineid: "",
        stateitem: null,
    });
    const [LineImg, setLineimg] = useState(null);
    const [errorName, setErrorname] = useState(false);
    const [errorDescrip, setErrordescrip] = useState(false);
    const [errorImg, setErrorimg] = useState(false);
    const [errorLine, setErrorline] = useState(false);
    const [msgName, setMsgname] = useState("");
    const [msgDescrip, setMsgdescrip] = useState("");
    const [msgImg, setMsgimg] = useState("");
    const [msgLine, setMsgLine] = useState("");

    const handleClose = () => {
        setOpen(false);
        setLineimg(null);
        setErrorname(false);
        setErrordescrip(false);
        setErrorimg(false);
        setErrorline(false);
        setMsgLine("");
        setMsgname("");
        setMsgdescrip("");
        setMsgimg("");
        setData({
            name: "",
            descrip: "",
            imageView: null,
            nameline: "",
            lineid: "",
            stateitem: null,
        });
    };

    const uploadFile = (e) => {
        setLineimg(e.target.files[0]);
        imgHandler(e.target.files[0]);
    };

    const imgHandler = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (reader.readyState === 2) {
                //0= empty ->vacío
                //1=Loading -> cargando
                //2=Done-> completo
                setData({
                    ...data,
                    imageView: e.target.result,
                });
            }
        };
        reader.readAsDataURL(e);
    };

    const handleChange = (e) => {
        // console.log("change: ",e.target.name + ":" + e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeList = (nameLine) => {
        //console.log(nameLine.target.innerText)
        const idfinal = lines.filter((ln) =>
            ln.name == nameLine ? ln.id : null
        )[0].id;
        const stateline = lines.filter((ln) =>
            ln.name == nameLine ? ln.stateline : null
        )[0].stateline;
        // console.log("idfinal",idfinal)
        setData({
            ...data,
            lineid: idfinal,
            nameline: nameLine,
            stateitem: stateline,
        });
    };

    const handleCreate = (data) => {
        // console.log("datainicio",data)
        let typeToast = "error";
        let msg = "";

        if (data.nameline == "") {
            msg = "Linea es requerida.";
            setErrorline(true);
            setMsgLine(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorline(false);
            setMsgLine("");
        }

        if (data.name == "") {
            msg = "Nombre es requerido.";
            setErrorname(true);
            setMsgname(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorname(false);
            setMsgname("");
        }

        if (data.descrip == "") {
            msg = "Descripción es requerida.";
            setErrordescrip(true);
            setMsgdescrip(msg);
            ToastType(typeToast, msg);
        }else{
            setErrordescrip(false);
            setMsgdescrip("");
        }

        if (LineImg == null) {
            msg = "Debe seleccionar la imagen";
            setErrorimg(true);
            setMsgimg(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorimg(false);
            setMsgimg("");
        }
        if (msg == "") {
            //stateitem
            const dataFinal = new FormData();

            dataFinal.append("name", data.name);
            dataFinal.append("descrip", data.descrip);
            dataFinal.append("image", LineImg);
            dataFinal.append("stateitem", data.stateitem);
            dataFinal.append("lineid", data.lineid);

            //console.log(dataFinal)
            // console.log("dataenvio:",data)
            postRequestFile("/sublines/create", dataFinal, async (result) => {
                //console.log(result)
                if (result.success) {
                    ToastType("success", result.msg);
                } else {
                    ToastType("error", result.msg);
                }
            });
            handleClose();
        }
        return;
    };

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

                    <Grid item container xs={12}>
                        {/* Formulario */}
                        <Grid item xs={8}>
                            {data.stateitem == 2 ? (
                                <Grid item>
                                    <Typography
                                        variant="caption"
                                        textAlign={"center"}
                                        color="red"
                                    >
                                        Este item se va a crear con estado{" "}
                                        <b>inactivo</b>
                                    </Typography>
                                </Grid>
                            ) : (
                                ""
                            )}
                            <Box
                                component="form"
                                onSubmit={handleCreate}
                                autoComplete="off"
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <Autocomplete
                                    disablePortal
                                    id="nameline"
                                    name="nameline"
                                    // value={data.nameline}
                                    onChange={(event, newValue) => {
                                        handleChangeList(newValue);
                                    }}
                                    options={
                                        lines && lines.map((ln) => ln.name)
                                    }
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        // console.log(params),
                                        <TextField
                                            error={errorLine}
                                            helperText={msgLine}
                                            {...params}
                                            label="Seleccione"
                                        />
                                    )}
                                />

                                <TextField
                                    error={errorName}
                                    helperText={msgName}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="name"
                                    label="Nombre"
                                    type="text"
                                    id="name"
                                    onChange={handleChange}
                                />
                                <TextField
                                    error={errorDescrip}
                                    helperText={msgDescrip}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="descrip"
                                    label="Descripción"
                                    type="text"
                                    id="descrip"
                                    onChange={handleChange}
                                />

                                <TextField
                                    error={errorImg}
                                    helperText={msgImg}
                                    margin="none"
                                    required
                                    fullWidth
                                    name="image"
                                    //label="Imagen"
                                    type="file"
                                    id="image"
                                    onChange={(e) => uploadFile(e)}
                                    inputProps={{
                                        accept: "image/*",
                                    }}
                                />
                            </Box>
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
                            <Grid item>
                                {LineImg == null ? (
                                    <CircularProgress />
                                ) : (
                                    <img
                                        src={data.imageView}
                                        alt="ImgLine"
                                        width={200}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end">
                        <Button
                            color="success"
                            variant="contained"
                            size="large"
                            onClick={() => handleCreate(data)}
                        >
                            Crear
                        </Button>

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

export default ModalCreate;
