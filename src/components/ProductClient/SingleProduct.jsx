import React from "react";
import { Grid, Typography, Container, Link, Button } from "@mui/material";
import { routeImg, msgWhatsapp } from "../../utils/Functions";
import { makeStyles } from "@mui/styles";
import imgWhatsapp from "../../assets/whatsapp.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const useStyles = makeStyles((theme) => ({
    titulos: {
        // fontFamily: " Caveat !important",
        color: "#a9cf55 !important",
    },
}));

const product = {
    id: 10,
    name: "Producto vasos inactivos 2",
    descrip: "Descrip Producto vasos inactivos 2",
    image: "8h9hIk5lVA2j4RAe5hxlhbnPtUg0oc9cew2gZgsW.jpg",
    price: 45000,
    stateitem: 1,
    sublineid: 6,
    created_at: "2022-09-29T16:30:49.000000Z",
    updated_at: "2022-09-29T19:43:32.000000Z",
};

const SingleProduct = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" sx={{ marginTop: {xs:20,md:2},  }} >
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
                    height: { xs: "30vh", md:"45vh", lg: "75vh" },
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        // border: "solid",
                        // borderColor: "red",
                        minHeight: "100%",
                        // backgroundImage:
                        //     "url('https://i0.wp.com/noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg?fit=1080%2C609&ssl=1')",
                        backgroundImage:"url(" + routeImg(product.image) +")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center",
                    }}
                    
                >
                    
                </Grid>
                
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ minHeight: "100%", marginTop: { xs: 3, md: 5 } }}
                >
                    <Typography variant="h4" className={classes.titulos}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6">Descripción:</Typography>
                    <Typography variant="subtitle1">
                        {product.descrip}
                    </Typography>

                    <Typography variant="h6">Precio:</Typography>
                    <Typography variant="subtitle1">
                        {product.price}
                    </Typography>

                    <Typography variant="subtitle1" textAlign="center" sx={{margin:3}} >
                        {/* Comprar:
                        <Link
                            target="_blank"
                            href={msgWhatsapp(
                                "¡Hola!, me gustaría saber más acerca de este producto"
                            )}
                        >
                            <img
                                width={50}
                                src={imgWhatsapp}
                                alt="image-whatsapp"
                            />
                        </Link> */}

                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<WhatsAppIcon />}
                            target="_blank"
                            href={msgWhatsapp(
                                "¡Hola!, me gustaría saber más acerca de este producto"
                            )}
                        >
                            Comprar
                        </Button>
                    </Typography>

                    {/* https://api.whatsapp.com/send?phone=573152240011&text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20este%20producto%20BOLSA%20PARA%20AGUA%20CALIENTE%20https://www.medicallife.com.co/us/product/317 */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleProduct;
