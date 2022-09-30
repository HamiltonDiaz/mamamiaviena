import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Modal,
    Grid,
    Button,
    TextField,
    CircularProgress,
    FormControlLabel,
    Switch,
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

const ModalEdit = ({
    open,
    setOpen,
    titleModal,
    prevData,
    lines,
    sublines,
}) => {
    const {
        imageView,
        imgold,
        namePrev,
        descripPrev,
        id,
        statePrev,
        nameline,
        namesubline,
        priceprev,
    } = prevData;
    const [data, setData] = useState({
        name: namePrev,
        descrip: descripPrev,
        image: imgold,
        stateitem: statePrev,
        nameline: nameline,
        lineid:"",
        sublineid: "",
        namesubline: namesubline,
        price: priceprev,
        imageView: imageView,
    });

    const [lineState, setLinestate] = useState(null);
    const [sublineState, setSublinestate] = useState(null);
    const [listSublines, setListsublines] = useState([]);
    const [LineImg, setLineimg] = useState(null);
    const [errorName, setErrorname] = useState(false);
    const [errorDescrip, setErrordescrip] = useState(false);
    const [errorImg, setErrorimg] = useState(false);
    const [errorLine, setErrorline] = useState(false);
    const [errorSubline, setErrorsubline] = useState(false);
    const [errorPrice, setErrorprice] = useState(false);
    const [msgName, setMsgname] = useState("");
    const [msgDescrip, setMsgdescrip] = useState("");
    const [msgImg, setMsgimg] = useState("");
    const [msgLine, setMsgLine] = useState("");
    const [msgSubline, setMsgsubline] = useState("");
    const [msgPrice, setMsgprice] = useState("");

    const handleClose = () => {
        setLinestate(null)
        setSublinestate(null)
        setListsublines([])
        setLineimg(null)
        setErrorname(false)
        setErrordescrip(false)
        setErrorimg(false)
        setErrorline(false)
        setErrorsubline(false)
        setErrorprice(false)
        setMsgname("")
        setMsgdescrip("")
        setMsgimg("")
        setMsgLine("")
        setMsgsubline("")
        setMsgprice("")        
        setOpen(false)
        setData({
            name: "",
            descrip: "",
            image: "",
            stateitem: null,
            nameline: "",
            lineid: "",
            sublineid: "",
            namesubline: "",
            price:null,
            imageView: null,
        })
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
        let valEnd = e.target.value;
        if (valEnd == "on" && e.target.checked) {
            valEnd = 1;
        }
        if (valEnd == "on" && e.target.checked == false) {
            valEnd = 2;
        }
        // console.log(valEnd,  e.target.value, e.target.checked)
        setData({
            ...data,
            [e.target.name]: valEnd,
        });
    };
    const handleChangeList = (name) => {
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
        setLinestate(finalStateLine);
        setData({
            ...data,
            nameline: name,
            namesubline: "",
            lineid: finalLineId,
        });
    };

    const handleEdit = (data) => {
        // console.log("Data Inicial: ", data);
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

        if (data.namesubline == "") {
            msg = "Sublinea es requerida.";
            setErrorsubline(true);
            setMsgsubline(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorsubline(false);
            setMsgsubline("");
        }

        if (data.price == "") {
            msg = "Precio es requerido.";
            setErrorprice(true);
            setMsgprice(msg);
            ToastType(typeToast, msg);
        }else{
            setErrorprice(false);
            setMsgprice("");
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
            
            const dataFinal = new FormData();
            dataFinal.append("id", id);
            dataFinal.append("name", data.name);
            dataFinal.append("descrip", data.descrip);
            dataFinal.append("image", LineImg);
            dataFinal.append("price", data.price);
            dataFinal.append("sublineid", data.sublineid);
            dataFinal.append("lineid", data.lineid);
            dataFinal.append("stateitem", data.stateitem == true ? 1 : 2);
            dataFinal.append("imgold", imgold);
            // console.log("DataFinal: ", data)
            postRequestFile("/products/update", dataFinal, async (result) => {
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

    useEffect(() => {
        if (lines && sublines && nameline && namesubline) {
            const finalLineid=lines.filter((ln) =>ln.name == nameline ? ln.id : null)[0].id
            const finalSublineid=sublines.filter((sln) =>sln.name == namesubline && sln.lineid==finalLineid ? sln.id : null)[0].id            
            const finLineState=lines.filter((ln) =>ln.name == nameline ? ln.linestate : null)[0].linestate
            const finSublineState=sublines.filter((sln) =>sln.name == namesubline && sln.lineid==finalLineid ? sln.sublinestate : null)[0].sublinestate            
            setLinestate(finLineState)
            setSublinestate(finSublineState)
            setListsublines(
                sublines.filter((sln) =>
                    sln.lineid == finalLineid ? sln.name : null
                )
            )
            setData({
                ...data,
                sublineid: finalSublineid,
                lineid:finalLineid         
            })            
        }
        imgold && imgold ? setLineimg(imgold) : setLineimg(null);
    }, []);

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
                            {lineState == 2 || sublineState == 2 ? (
                                <Typography variant="caption" color="red">
                                    Debe activar registro(s) padre para poder
                                    habilitar este item.
                                </Typography>
                            ) : (
                                ""
                            )}

                            <Box
                                component="form"
                                onSubmit={handleEdit}
                                autoComplete="off"
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <FormControlLabel
                                    disabled={
                                        lineState == 2 || sublineState == 2
                                            ? true
                                            : false
                                    }
                                    labelPlacement="start"
                                    onChange={handleChange}
                                    control={
                                        <Switch
                                            name="stateitem"
                                            defaultChecked={statePrev}
                                        />
                                    }
                                    label="Estado"
                                />
                                <Autocomplete
                                    disablePortal
                                    isOptionEqualToValue={(option, value) =>
                                        option.id === value.id
                                    }
                                    id="nameline"
                                    name="nameline"
                                    value={
                                        data.nameline != null
                                            ? data.nameline
                                            : ""
                                    }
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
                                            label="Linea"
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
                                            setSublinestate(finalStateSubline);
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
                                    defaultValue={namePrev}
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
                                    defaultValue={descripPrev}
                                />
                                <TextField
                                    error={errorPrice}
                                    helperText={msgPrice}
                                    defaultValue={priceprev}
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
                                {data.imageView == null ? (
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
                            onClick={() => handleEdit(data)}
                        >
                            Modificar
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

export default ModalEdit;
