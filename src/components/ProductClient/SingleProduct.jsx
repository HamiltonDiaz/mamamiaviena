import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Grid, Typography, Container,Button } from "@mui/material";
import { routeImg, msgWhatsapp } from "../../utils/Functions";
import { global } from "../../utils/utils";
import { makeStyles } from "@mui/styles";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { getRequest } from "../../utils/api";
import NotFoundPage from "../../pages/NotFoundPage";

const useStyles = makeStyles((theme) => ({
    titulos: {
        // fontFamily: " Caveat !important",
        color: "#a9cf55 !important",
    },
}));

const Contenido = ({productView, routeProduct}) => {
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

                        minHeight: "100%",
                        backgroundImage: "url(" + routeImg(productView.image) + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center",
                    }}
                ></Grid>

                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ minHeight: "100%", marginTop: { xs: 3, md: 5 } }}
                >
                    <Typography variant="h4" className={classes.titulos}>
                        {productView.name}
                    </Typography>
                    <Typography variant="h6">Descripción:</Typography>
                    <Typography variant="subtitle1">
                        {productView.descrip}
                    </Typography>

                    <Typography variant="h6">Precio:</Typography>
                    <Typography variant="subtitle1">{productView.price}</Typography>

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
                                "¡Hola!, me gustaría saber más acerca de este producto " +
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

const SingleProduct = () => {
    const [product, setProduct] = useState({});    
    const { id } = useParams();
    const routeProduct = useLocation();

    useEffect(() => {
        getRequest("/products-client/" + id, async (result) => {
            if (result.success) {
                setProduct(result.data);
                // console.log(result.data);
            }
        });
    }, [id]);

    return product ? (
        <Contenido
            productView={product}
            routeProduct={routeProduct}
        />
    ) : (
        <NotFoundPage/>
    );
};

export default SingleProduct;
