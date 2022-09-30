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
    Skeleton,
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

const ModalCreate = ({ open, setOpen, titleModal, sublines, lines }) => {
    const [data, setData] = useState({
        name: "",
        descrip: "",
        imageView: null,
        namesubline: "",
        nameline: "",
        price: "",
        sublineid: null,
        stateitem: 1,
    });
    //Nuevos
    const [listSublines, setListsublines] = useState([]);
    const [stateLine, setStateline] = useState(null);

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
        setListsublines([]);
        setMsgsubline("");
        setMsgname("");
        setMsgdescrip("");
        setMsgimg("");
        setMsgprice("");
        setData({
            name: "",
            descrip: "",
            imageView: null,
            namesubline: "",
            nameline: "",
            price: "",
            sublineid: "",
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

    const handleChangeList = (name, event) => {
        // console.log(event.target.id)
        // return
        const finalLineId = lines.filter((ln) =>
            ln.name == name ? ln.id : null
        )[0].id;
        const finalStateLine = lines.filter((ln) =>
            ln.name == name ? ln.name : null
        )[0].linestate;

        setListsublines(
            sublines.filter((sln) =>
                sln.lineid == finalLineId ? sln.name : null
            )
        );
        setStateline(finalStateLine);
        setData({
            ...data,
            nameline: name,
            namesubline: "",
            lineid: finalLineId,
            stateitem: finalStateLine,
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
        }else{
            setErrorsubline(false);
            setMsgsubline("");
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

        if (data.price == "" || data.price < 0) {
            msg = "Precio es requerido.";
            setErrorprice(true);
            setMsgprice(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorprice(false);
            setMsgprice("");
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
            // console.log("datafinal",data)
            const dataFinal = new FormData();
            dataFinal.append("name", data.name);
            dataFinal.append("descrip", data.descrip);
            dataFinal.append("image", LineImg);
            dataFinal.append("price", data.price);
            dataFinal.append("stateitem", data.stateitem);
            dataFinal.append("sublineid", data.sublineid);

            //console.log(dataFinal))
            postRequestFile("/products/create", dataFinal, async (result) => {
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
            sx={{
                overflow: "scroll",
            }}
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
                                    onChange={(event, newValue) => {
                                        handleChangeList(newValue, event);
                                    }}
                                    isOptionEqualToValue={(option, value) =>
                                        option.id === value.id
                                    }
                                    options={
                                        lines && lines.map((ln) => ln.name)
                                    }
                                    sx={{ width: 400 }}
                                    renderInput={(params) => (
                                        // console.log(params),
                                        <TextField
                                            error={errorSubline}
                                            helperText={msgSubline}
                                            {...params}
                                            label="Línea"
                                        />
                                    )}
                                />

                                {data.nameline != "" ? (
                                    <Autocomplete
                                        disablePortal
                                        id="namesubline"
                                        name="namesubline"
                                        value={data.namesubline}
                                        isOptionEqualToValue={(option, value) =>
                                            option.id === value.id
                                        }
                                        onChange={(event, newValue) => {
                                                const finalStateSubline =
                                                sublines.filter((sln) =>
                                                    sln.name == newValue &&
                                                    sln.lineid == data.lineid
                                                        ? sln.sublinestate
                                                        : null
                                                )[0].sublinestate;
                                            setData({
                                                ...data,
                                                namesubline: newValue,
                                                sublineid: sublines.filter(
                                                    (sln) =>
                                                        sln.name == newValue &&
                                                        sln.lineid ==
                                                            data.lineid
                                                            ? sln.id
                                                            : null
                                                )[0].id,
                                                stateitem:
                                                    finalStateSubline == 2 ||
                                                    stateLine == 2
                                                        ? 2
                                                        : 1,
                                            });
                                        }}
                                        options={
                                            listSublines &&
                                            listSublines.map((sln) => sln.name)
                                        }
                                        sx={{ width: 400, marginTop: 2 }}
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
                                ) : (
                                    <Skeleton
                                        variant="text"
                                        sx={{
                                            fontSize: "1rem",
                                            width: "80%",
                                            marginTop: 2,
                                        }}
                                    />
                                )}

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
                                    error={errorPrice}
                                    helperText={msgPrice}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="price"
                                    label="Precio"
                                    type="number"
                                    inputProps={{
                                        inputMode: "numeric",
                                        min: 0,
                                    }}
                                    id="price"
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
