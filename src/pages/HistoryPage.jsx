import * as React from 'react';
import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import AppFrame from "./AppFrame";


const HistoryPage = () => {
    const itemData = [
        {
            img: require("../assets/pageHisto1.jpg")
        },
        {
            img: require("../assets/pageHisto2.jpg")
        },
        {
            img: require("../assets/pageHisto3.jpg")
        },
        {
            img: require("../assets/pageHisto4.jpg")
        },
        {
            img: require("../assets/pageHisto5.jpg")
        },
        {
            img: require("../assets/pageHisto6.jpg")
        },
        {
            img: require("../assets/pageHisto7.jpg")
        },
        {
            img: require("../assets/pageHisto8.jpg")
        },

    ];
    return (
        <AppFrame>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >

                <Grid item xs={12} md={5}>

                    <Typography variant="h3" textAlign={"center"}
                        sx={{
                            fontFamily: " Caveat !important",
                            color: "#F2AD9F !important",
                            display: { xs: "flex", md: "none" }
                        }} >
                        Nuestra Historia
                    </Typography>

                    <Typography variant="h1" textAlign={"center"}
                        sx={{
                            fontFamily: " Caveat !important",
                            color: "#F2AD9F !important",
                            display: { xs: "none", md: "flex" }
                        }} >
                        Nuestra Historia
                    </Typography>

                    <Box sx={{ padding: 3 }}>
                        <ImageList variant="woven" cols={4} gap={8}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} sx={{ padding: 2 }} >
                    <Typography variant="h5" align='justify' sx={{ marginTop: 2 }}>
                        Nuestras camisetas están hechas en tela Piel de durazno que es muy suave y fresca. Y como ya hemos dicho los diseños son originales, artísticos y hechos por una pequeña artista de once años.
                    </Typography>
                    <Typography variant="h5" align='justify' sx={{ marginTop: 2 }}>
                        Mamma mía, Viena es un emprendimiento que nace del amor de una madre por su hija: una talentosa niña de once años que ama el arte y que sueña con ser una gran artista algún día. La historia empezó hace dos años cuando Viena empezó a dibujar tan bello que su mamá quedó asombrada, pero al ver que su hija no creía mucho en su propio talento decidió demostrárselo estampando uno de sus dibujos en una camiseta y publicitándola por redes sociales… y así quedó comprobado el talento de Viena cuando las personas hicieron encargos de la camiseta porque les encantó el diseño. Así que cada uno de nuestros clientes es alguien más que cree y a poya el talento de Viena, lo cual nos parece hermoso.
                    </Typography>
                    <Typography variant="h5" align='justify' sx={{ marginTop: 2 }}>
                        A la par de este acontecimiento la familia realizó un viaje por Europa y el paso por Italia marcó a Viena para siempre: sus calles, arquitectura, maravillosas obras de arte en cada esquina… Por eso la influencia de la cultura y el idioma italiano está presente en nuestra marca.
                    </Typography>
                    <Typography variant="h5" align='justify' sx={{ marginTop: 2 }} >
                        <b>Mamma mía, Viena es diseño original… es arte para tu look</b>
                    </Typography>
                </Grid>
            </Grid>
        </AppFrame>
    )
};

export default HistoryPage;
