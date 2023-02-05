import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Grid, Typography, Container, Button } from "@mui/material";
import { routeImg, msgWhatsapp } from "../../utils/Functions";
import { global } from "../../utils/utils";
import { makeStyles } from "@mui/styles";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getRequest } from "../../utils/api";
import NotFoundPage from "../../pages/NotFoundPage";
import {convertNumber} from "../../utils/Functions"

const useStyles = makeStyles((theme) => ({
    titulos: {
        // fontFamily: " Caveat !important",
        color: "#F2AD9F !important",
    },
}));

const Contenido = ({ desingView, routeProduct }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" sx={{ marginTop: { xs: 20, md: 2 } }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                // wrap="nowrap"
                sx={{
                    // border: "solid",
                    // borderColor: "orange",
                    height: { xs: "30vh", md: "45vh", lg: "75vh" },
                }}
            >
                <Grid
                    item

                    xs={12}
                    md={6}
                    sx={{
                        maxHeight: "100%",
                        overflow: "hidden"
                    }}
                >
                     <img src={routeImg(desingView.image)} width="90%" />
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ minHeight: "100%", marginTop: { xs: 3, md: 5 } }}
                >
                    <Typography variant="h4" className={classes.titulos}>
                        {desingView.name}
                    </Typography>
                    <br/>
                    <Typography variant="subtitle1">
                        {desingView.descrip}
                    </Typography>

                   
                    <Typography
                        variant="subtitle1"
                        textAlign="center"
                        sx={{ margin: 3 }}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<WhatsAppIcon />}
                            target="_blank"
                            href={msgWhatsapp(
                                "¡Hola!, quiero este diseño en uno de tus productos " +
                                global.urlHome +
                                routeProduct.pathname
                            )}
                        >
                            Comprar
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

const SingleDesing = () => {
    const [desing, setDesing] = useState({});
    const { id } = useParams();
    const routeProduct = useLocation();

    useEffect(() => {
        getRequest("/products-client/desing/" + id, async (result) => {
            if (result.success) {
                setDesing(result.data);
                ///console.log(result.data);
            }
        });
    }, [id]);

    return desing ? (
        <Contenido
            desingView={desing}
            routeProduct={routeProduct}
        />
    ) : (
        <NotFoundPage />
    );
};

export default SingleDesing;

