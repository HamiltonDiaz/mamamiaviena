import React from "react";
import AppFrame from "./AppFrame";
import imgHome from "../assets/ImgHome2.png";
import imgHomeMovil from "../assets/ImgHome2Movil.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CoruoselProduct from "../components/Carousel/CoruoselProduct";
import Container from "@mui/material/Container";
import dataProducts from "../product-data";
import CoruoselDesing from "../components/Carousel/CoruoselDesing";

const useStyles = makeStyles((theme) => ({
    titulos: {
        fontFamily: " Caveat !important",
        color: "#a9cf55 !important",
    },
}));

const WelcomePage = () => {
    const classes = useStyles();
    return (
        <AppFrame>
            <Grid container direction="column" spacing={3}>
                {/* ImgHome */}
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        sx={{
                            display: { xs: "none", lg: "flex" },
                        }}
                    >
                        <Grid item>
                            <img src={imgHome} alt="imagen Home" />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#F2AD9F !important",
                            display: { xs: "flex", lg: "none" },
                        }}
                    >
                        <Grid item>
                            <img src={imgHomeMovil} alt="imagen Home" />
                        </Grid>
                    </Grid>
                </Grid>

                {/* productos */}
                <Grid item>
                    <Typography
                        variant="h3"
                        align="center"
                        className={classes.titulos}
                    >
                        Nuestros Productos
                    </Typography>
                </Grid>

                <Container>
                    <Grid item>
                        <CoruoselProduct data={dataProducts} />
                    </Grid>
                </Container>

                <Grid item>
                    <Typography
                        variant="h3"
                        align="center"
                        className={classes.titulos}
                    >
                        Nuestros Diseños
                    </Typography>
                </Grid>
                <Container>
                    <Grid item>
                        <CoruoselDesing data={dataProducts} />
                    </Grid>
                </Container>
            </Grid>
        </AppFrame>
    );
};

export default WelcomePage;
