import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { postRequest, postLogin, postData } from "../../utils/api";
import { setCookie } from "../../utils/CookiesUtil";
import { global } from "../../utils/utils";
import ToastType from "../../utils/ToastType";
import axios from "axios"

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://www.mamamiaviena.com/">
                MamamíaViena.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Login = () => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [dataError, setDataerror] = useState({
        name: false,
        email: false,
        password: false,
    });
    const [dataErrorMsg, setDataerrormsg] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleError = (type, msg) => {
        setDataerror({
            ...dataError,
            [type]: !dataError[type],
        });
        setDataerrormsg({
            ...dataErrorMsg,
            [type]: msg,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let typeToast = "error";
        let msg = "";
        if (data.name == "") {
            msg = "Nombre es requerido.";
            handleError("name", msg);
            ToastType(typeToast, msg);
        }
        if (data.email == "") {
            msg = "Email es requerido.";
            handleError("email", msg);
            ToastType(typeToast, msg);
        } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(data.email)
        ) {
            msg = "Email incorrecto.";
            handleError("email", msg);
            ToastType(typeToast, msg);

            /* 
            "diaz3220"
            \w+([\.-]?\w+)* =>que tenga letras, numeros Y/o guiones
            \w=cualquier nuemro o letra
            +=que aparezca al menos una vez
            [\.-]?=opcionalmente seguido de punto o guion
            \w+=que termine con letra o numero
            *= que puede o no aparecer
            ^ = quiere decir que inicia
        */
            /*
            (\.\w{2,3,4})+ => dominio -> .co .com .com.co .edu.co .gov.co
            \. =empieza con punto
            \w{2,3,4} = tenga numero o letra de dos hasta 4 caracteres
            + = que se repita al menos una vez
            $ = indica que finaliza la cadena
        */
        }
        if (data.password == "") {
            msg = "Contraseña es requerida.";
            handleError("password", msg);
            ToastType(typeToast, msg);
        }

        if (msg == "") {
            //axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
            postRequest("/login", data, async (result) => {
                ToastType("success", "Ingreso exitoso");
                setCookie("TOKEN", "tokenservidor");
                console.log(result);

                //window.location.replace(`${global.urlHome}/admin/home`);
            });

        }
        return;
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingreso
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            error={dataError.name}
                            helperText={dataErrorMsg.name}
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            name="name"
                            label="Nombre Usuario"
                            autoFocus
                            onChange={handleChange}
                        />

                        <TextField
                            error={dataError.email}
                            helperText={dataErrorMsg.email}
                            type="email"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <TextField
                            error={dataError.password}
                            helperText={dataErrorMsg.password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ingresar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    ¿Olvidó su contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Registrame"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 4, mb: 4 }} />
            </Container>
            <ToastContainer />
        </>
    );
};
export default Login;
