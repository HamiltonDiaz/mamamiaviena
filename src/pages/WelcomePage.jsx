import React, {useEffect, useState} from "react";
import AppFrame from "./AppFrame";
import imgHome from "../assets/ImgHome2.png";
import imgHomeBig from "../assets/ImgHome3.png";
import imgHomeMovil from "../assets/ImgHome2Movil.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CoruoselProduct from "../components/Carousel/CoruoselProduct";
import Container from "@mui/material/Container";
import CoruoselDesing from "../components/Carousel/CoruoselDesing";

import { getRequest } from "../utils/api";


const useStyles = makeStyles((theme) => ({
    titulos: {
        fontFamily: " Caveat !important",
        color: "#a9cf55 !important",
    },
}));

const WelcomePage = () => {
    const classes = useStyles();
    
    const [dataProduct, setDataProduct] = useState([])
    const [dataDesing, setDataDesing] = useState([])

    useEffect(() => {
        getRequest("/line/home", async (result) => {
            if (result.success) {
                //console.log(result.data);
                setDataProduct(result.data);
            }
        });
        getRequest("/line/home", async (result) => {
            if (result.success) {
                setDataDesing(result.data);
                // console.log(result.data);
            }
        });

    }, []);

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
                            display: { xs: "none", lg: "flex", xl: "none" },
                        }}
                    >
                        <Grid item>
                            <img src={imgHome} alt="imagen Home" />
                            
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        sx={{
                            display: { xs: "none", lg: "none", xl:"flex" },
                        }}
                    >
                        <Grid item>                            
                            <img src={imgHomeBig} alt="imagen Home" />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#F2AD9F !important",
                            display: { xs: "flex", lg: "none", xl: "none" },
                        }}
                    >
                        <Grid item>
                            <img src={imgHomeMovil} alt="imagen Home" />
                        </Grid>
                    </Grid>
                </Grid>

                {/* productos */}
                <Grid item sx={{marginY:2}}>
                    <Typography
                        variant="h3"
                        align="center"
                        className={classes.titulos}
                    >
                        Nuestros Productos
                    </Typography>
                </Grid>

                <Container sx={{marginY:2}}>
                    <Grid item >
                        <CoruoselProduct data={dataProduct} />
                    </Grid>
                </Container>

                <Grid item sx={{marginY:2}}>
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
                        <CoruoselDesing data={dataDesing} />
                    </Grid>
                </Container>
            </Grid>
        </AppFrame>
    );
};

export default WelcomePage;
