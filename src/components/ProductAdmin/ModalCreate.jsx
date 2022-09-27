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
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
};

const ModalCreate = ({ open, setOpen, titleModal, sublines }) => {
    
    const [data, setData] = useState({
        name: "",
        descrip: "",
        imageView: null,
        namesubline:"",
        price:"",
        sublineid:null,
        stateitem:null
    });
    const [LineImg, setLineimg] = useState(null);
    const [errorName, setErrorname] = useState(false);
    const [errorDescrip, setErrordescrip] = useState(false);
    const [errorImg, setErrorimg] = useState(false);
    const [errorSubline, setErrorsubline] = useState(false);
    const [errorPrice, setErrorprice] = useState(false);
    const [msgName, setMsgname] = useState("");
    const [msgDescrip, setMsgdescrip] = useState("");
    const [msgImg, setMsgimg] = useState("");
    const [msgSubline, setMsgsubline] = useState("");
    const [msgPrice, setMsgprice] = useState("");

    const handleClose = () => {
        setOpen(false);
        setLineimg(null);
        setErrorname(false);
        setErrordescrip(false);
        setErrorimg(false);
        setErrorsubline(false);
        setErrorprice(false);
        setMsgsubline("");
        setMsgname("");
        setMsgdescrip("");
        setMsgimg("");
        setMsgprice("");
        setData({
            name: "",
            descrip: "",
            imageView: null,
            namesubline:"",
            price:"",
            sublineid:"",
            stateitem:null
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
        const idfinal=sublines.filter((sln) =>sln.name == nameLine ? sln.id : null)[0].id
        const sublinestate=sublines.filter((sln) =>sln.name == nameLine ? sln.sublinestate : null)[0].sublinestate
        // console.log("idfinal",idfinal)
        setData({
            ...data,
            sublineid: idfinal,
            namesubline:nameLine,
            stateitem: sublinestate,
        });
    };
    
    const handleCreate = (data) => {
        // console.log("datainicio",data)
        let typeToast = "error";
        let msg = "";

        if (data.namesubline == "") {
            msg = "Sublinea es requerida.";
            setErrorsubline(true);
            setMsgsubline(msg);
            ToastType(typeToast, msg);
        }

        if (data.name == "") {
            msg = "Nombre es requerido.";
            setErrorname(true);
            setMsgname(msg);
            ToastType(typeToast, msg);
        }
        if (data.descrip == "") {
            msg = "Descripción es requerida.";
            setErrordescrip(true);
            setMsgdescrip(msg);
            ToastType(typeToast, msg);
        }

        if (data.price == "" || data.price<0) {
            msg = "Precio es requerido.";
            setErrorprice(true);
            setMsgprice(msg);
            ToastType(typeToast, msg);
        }
        
 
 
        if (LineImg == null) {
            msg = "Debe seleccionar la imagen";
            setErrorimg(true);
            setMsgimg(msg);
            ToastType(typeToast, msg);
        }
        if (msg == "") {
            //stateitem
            const dataFinal = new FormData();

            dataFinal.append("name", data.name);
            dataFinal.append("descrip", data.descrip);
            dataFinal.append("image", LineImg);
            dataFinal.append("price", data.price);
            dataFinal.append("stateitem", data.stateitem);
            dataFinal.append("sublineid", data.sublineid);

            //console.log(dataFinal)
            // console.log("dataenvio:",data)
            postRequestFile("/products/create", dataFinal, async (result) => {
                //console.log(result)
                if (result.success) {
                    ToastType("success", result.msg);
                } else {
                    ToastType("error", result.msg);
                }
            });
            handleClose()
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
                                    onChange={(event, newValue) => {
                                        handleChangeList(newValue);
                                    }}
                                    options={
                                        sublines &&
                                        sublines.map((sln) => sln.name)
                                    }
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        // console.log(params),
                                        <TextField
                                            error={errorSubline}
                                            helperText={msgSubline}
                                            {...params}
                                            label="Sublinea"
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

                                <TextField
                                    error={errorPrice}
                                    helperText={msgPrice}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="price"
                                    label="Precio"
                                    type="number"
                                    inputProps={{ inputMode: 'numeric', min:0}}
                                    id="price"
                                    onChange={handleChange}
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
