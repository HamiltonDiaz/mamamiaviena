import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import LogoHome from "../assets/LogoHome.png";
import { makeStyles } from "@mui/styles";
import { BotonSecundario } from "../utils/ButtonsCustom";
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
    root:{
        //marginTop: 50,
    },
    imgLogo: {
        maxWidth: "50%",
    },
    imgLogoSX: {
        maxWidth: "100%",
    },
}));

const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid item xs={12} sm={5} align="center" sx={{marginTop: {xs:25, sm:5},}} >
                <img
                    src={LogoHome}
                    alt="LogoHome"
                    className={classes.imgLogo}
                />
            </Grid>
            <Grid item>
                <HeartBrokenIcon
                    sx={{
                        fontSize: { xs: 80, sm: 120 },
                        color: "#a9cf55",
                    }}
                />
            </Grid>

            <Grid item>
                <Typography
                    align="center"
                    sx={{
                        fontSize: { xs: 20, sm: 40 },
                        color: "#a9cf55",
                    }}
                >
                    Página no encontrada
                </Typography>
            </Grid>
            <Grid item>
                <RouterLink to="/">
                    <BotonSecundario
                      variant="outlined"
                      size="large"
                      
                    >
                        Ir a Inicio
                    </BotonSecundario>
                </RouterLink>
            </Grid>
        </Grid>
    );
};

export default NotFoundPage;
