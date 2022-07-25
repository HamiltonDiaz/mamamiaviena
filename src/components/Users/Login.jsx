import React, { useState, useEffect } from "react";
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
import {useNavigate} from "react-router-dom"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../Copyright/Copyright";
import { postRequest } from "../../utils/api";
import { setCookie, getCookie } from "../../utils/CookiesUtil";
import ToastType from "../../utils/ToastType";



const Login = () => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    // const [errorName, setErrorname] = useState(false);
    const [errorEmail, setErroremail] = useState(false);
    const [errorPassword, setErrorpassword] = useState(false);
    // const [msgName, setMsgname] = useState("");
    const [msgEmail, setMsgemail] = useState("");
    const [msgPassword, setMsgpassword] = useState("");

    const navigate = useNavigate()
    const isLogin= getCookie("TOKENAUTH")
    useEffect(() => {
        console.log(isLogin)
        if (isLogin!=null) {
            navigate("/admin/home",{replace:true})
        }
    }, [isLogin])

    const handleSubmit = (event) => {
        event.preventDefault();
        let typeToast = "error";
        let msg = "";

        // if (data.name == "") {
        //     msg = "Nombre es requerido.";
        //     setErrorname(true)
        //     setMsgname(msg)
        //     ToastType(typeToast, msg);
        // }
        if (data.email == "") {
            msg = "Email es requerido.";
            setErroremail(true)
            setMsgemail(msg)
            ToastType(typeToast, msg);
        } else if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(data.email)
        ) {
            msg = "Email incorrecto.";
            setErroremail(true)
            setMsgemail(msg)
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
            setErrorpassword(true)
            setMsgpassword(msg)
            ToastType(typeToast, msg);
        }

        if (msg == "") {
            //axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
            postRequest("/login", data, async (result) => {
                if(result.success){
                    ToastType("success", "Bienvenid@");
                    setCookie("TOKENAUTH", result.access_token, 24);
                    setTimeout(function(){
                        navigate("/admin/home")
                    }, 2000);
                    //window.location.replace(`${global.urlHome}/admin/home`);
                }else{
                    ToastType("error", result.message);
                }
                

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
                        {/* <TextField
                            error={errorName}
                            helperText={msgName}
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Nombre Usuario"
                            id="name"
                            type="text"                            
                            onChange={handleChange}
                        /> */}

                        <TextField
                            error={errorEmail}
                            helperText={msgEmail}
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            onChange={handleChange}
                        />
                        <TextField
                            error={errorPassword}
                            helperText={msgPassword}
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